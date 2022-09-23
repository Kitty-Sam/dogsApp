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
import { ModalAddNewNote } from '../../components/Modals/ModalAddNewNote/ModalAddNewNote';
import { ModalDialog } from '../../components/Modals/ModalDialog/ModalDialog';
import { cutDate } from '../../utils/cutDate';
import { COLORS } from '../../colors/colors';
import { TextItemThin } from '../../components/Text/TextItemThin/TextItemThin';
import { DayItemType } from './type';

const date = new Date().toISOString().split('T')[0];

export const CalendarScreen = () => {
  const dispatch = useDispatch();
  const taskId = Date.now();
  const currentUserId = useSelector(getCurrentUserId);

  const [pinnedDay, setPinnedDay] = useState(date);
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [title, setTitle] = useState('');
  const [items, setItems] = useState<DayItemType[]>([]);
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
        // @ts-ignore
        markedDays[item] = {
          selected: true,
          marked: true,
          selectedColor: COLORS.buttons.brown,
        };
      });
      setMarkedDays(markedDays);
    }

    if (pinnedDay) {
      const reference: FirebaseDatabaseTypes.Reference = await database.ref(
        `/users/${currentUserId}/notes/${pinnedDay}`,
      );
      const snapshot: FirebaseDatabaseTypes.DataSnapshot = await reference.once('value');

      if (snapshot.val()) {
        const values = snapshot.val();
        const data: DayItemType[] = Object.values(values);
        setItems(data);
      } else {
        setItems([]);
      }
    } else {
      const reference: FirebaseDatabaseTypes.Reference = await database.ref(`/users/${currentUserId}/notes/`);
      const snapshot: FirebaseDatabaseTypes.DataSnapshot = await reference.once('value');

      if (snapshot.val()) {
        const values = snapshot.val();
        const data: DayItemType[] = Object.values(values);
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
      .set({ name: title, date: pinnedDay, id: taskId });
    dispatch(toggleAppStatus(requestStatus.SUCCEEDED));
    getData();
    setTitle('');
    setIsOpen(false);
  };

  const removeItem = async (id: string) => {
    await database.ref(`/users/${currentUserId}/notes`).child(`${pinnedDay}`).child(`${id}`).remove();
  };

  return (
    <SafeAreaView style={styles.rootContainer}>
      <Calendar
        onDayPress={e => {
          setPinnedDay(e.dateString);
          setIsVisible(true);
        }}
        showSixWeeks={true}
        markedDates={markedDays}
      />

      <View style={styles.headerContainer}>
        <TextItemThin>Daily tasks</TextItemThin>
      </View>

      {items.length ? (
        <View style={styles.agenda}>
          <Text style={styles.dateTextContainer}>{cutDate(pinnedDay)}</Text>
          <View style={styles.tasksContainer}>
            {items.map((el, i) => (
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
                <TextItemThin style={styles.textNote}>{el.name}</TextItemThin>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      ) : (
        <View style={styles.noteContainer}>
          <TextItemThin style={styles.dateText}>{cutDate(pinnedDay)}</TextItemThin>
          <TextItemThin>... free day</TextItemThin>
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
