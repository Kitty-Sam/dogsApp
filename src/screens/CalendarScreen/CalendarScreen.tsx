import React, { useLayoutEffect, useState } from 'react';
import { Calendar } from 'react-native-calendars';
import { Alert, SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import { database } from '../../utils/getDataBaseURL';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentUserId } from '../../store/selectors/loginSelector';
import { toggleAppStatus } from '../../store/actions/appAC';
import { requestStatus } from '../../store/reducers/appReducer';
import { FirebaseDatabaseTypes } from '@react-native-firebase/database';
import { styles } from './style';
import { ModalAddNewNote } from '../../components/Modals/ModalAddNewNote';
import { ModalDialog } from '../../components/Modals/ModalDialog';
import { cutDate } from '../../utils/cutDate';

const date = new Date().toISOString().split('T')[0];

export const CalendarScreen = () => {
  const dispatch = useDispatch();
  const taskId = Date.now();
  const currentUserId = useSelector(getCurrentUserId);

  const [pinnedDay, setPinnedDay] = useState(date);
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [title, setTitle] = useState('');
  const [items, setItems] = useState([]);
  const [markedDays, setMarkedDays] = useState({});

  const getData = async () => {
    const referenceAll: FirebaseDatabaseTypes.Reference = await database.ref(`/users/${currentUserId}/notes/`);
    const snapshotAll: FirebaseDatabaseTypes.DataSnapshot = await referenceAll.once('value');

    if (!snapshotAll.val()) {
      setMarkedDays({});
    }

    if (snapshotAll.val()) {
      const data = Object.keys(snapshotAll.val());
      const markedDays = {};
      data.map(item => {
        markedDays[item] = {
          selected: true,
          marked: true,
          selectedColor: 'brown',
        };
      });
      console.log('markedDays', markedDays);
      setMarkedDays(markedDays);
    }

    if (pinnedDay) {
      const reference: FirebaseDatabaseTypes.Reference = await database.ref(
        `/users/${currentUserId}/notes/${pinnedDay}`,
      );
      const snapshot: FirebaseDatabaseTypes.DataSnapshot = await reference.once('value');

      if (snapshot.val()) {
        const values = snapshot.val();
        const data: any = Object.values(values);
        setItems(data);
      } else {
        setItems([]);
      }
    } else {
      const reference: FirebaseDatabaseTypes.Reference = await database.ref(`/users/${currentUserId}/notes/`);
      const snapshot: FirebaseDatabaseTypes.DataSnapshot = await reference.once('value');

      if (snapshot.val()) {
        const values = snapshot.val();
        const data: any = Object.values(values);
        setItems(data);
      } else {
        setItems([]);
      }
    }
  };

  useLayoutEffect(() => {
    getData();
  }, [date]);

  const savePress = async () => {
    if (title.trim() === '') {
      Alert.alert('Please, add the all necessary information');
      setTitle('');
      return;
    }
    dispatch(toggleAppStatus(requestStatus.LOADING));
    await database
      .ref(`/users/${currentUserId}/`)
      .child('notes/')
      .child(`${pinnedDay}`)
      .child(`${taskId}`)
      .set({ name: title, height: 20, date: pinnedDay, id: taskId });
    dispatch(toggleAppStatus(requestStatus.SUCCEEDED));
    getData();
    setTitle('');
    setIsOpen(false);
  };

  const removeItem = async (id: string) => {
    await database.ref(`/users/${currentUserId}/notes`).child(`${pinnedDay}`).child(`${id}`).remove();
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Calendar
        onDayPress={e => {
          setPinnedDay(e.dateString);
          setIsVisible(true);
        }}
        showSixWeeks={true}
        markedDates={markedDays}
      />
      <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
        <Text style={[styles.titleText, { fontStyle: 'italic' }]}>Daily tasks</Text>
      </View>
      {items.length ? (
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text
            style={{
              marginHorizontal: 18,
              fontSize: 28,
              borderRadius: 10,
              borderColor: 'grey',
              borderWidth: 1,
              padding: 4,
            }}
          >
            {cutDate(pinnedDay)}
          </Text>

          <View style={styles.tasksContainer}>
            {items.map((el, i): any => (
              <TouchableOpacity key={i} style={styles.itemContainer}>
                <Text
                  style={styles.closeText}
                  onPress={() => {
                    removeItem(el.id);
                    getData();
                  }}
                >
                  X
                </Text>
                <Text style={styles.titleText}>{el.name}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      ) : (
        <View style={{ flexDirection: 'row' }}>
          <Text style={{ margin: 20, fontSize: 28, borderRadius: 10, borderColor: 'grey', borderWidth: 1, padding: 4 }}>
            {cutDate(pinnedDay)}
          </Text>
          <Text style={[styles.titleText, { color: 'grey' }]}>... free day</Text>
        </View>
      )}

      <ModalDialog
        isVisible={isVisible}
        setIsVisible={setIsVisible}
        pinnedDay={pinnedDay}
        setIsOpen={setIsOpen}
        getData={getData}
      />
      <ModalAddNewNote
        isOpen={isOpen}
        setTitle={setTitle}
        setIsOpen={setIsOpen}
        title={title}
        pinnedDay={pinnedDay}
        savePress={savePress}
      />
    </SafeAreaView>
  );
};
