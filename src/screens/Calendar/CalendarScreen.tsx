import React, { useState } from 'react';
import { Agenda } from 'react-native-calendars';
import { Modal, Text, TouchableOpacity, View } from 'react-native';
import { CustomTextInput } from '../../components/TextInput/CustomTextInput';
import { AppButton } from '../../components/Button/CustomSquareButton';
import { AgendaEntry } from 'react-native-calendars/src/types';

const date = new Date().toISOString().split('T')[0];

export const CalendarScreen = () => {
  const [currentDay, setCurrentDay] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const [title, setTitle] = useState('');
  const [info, setInfo] = useState('');

  const [items, setItems] = useState<{ [key: string]: AgendaEntry[] }>({
    [date]: [{ name: 'add something', height: 20, day: currentDay }],
  });

  const renderItem = (item: AgendaEntry) => {
    return (
      <TouchableOpacity style={{ marginTop: 10, marginRight: 10 }}>
        {!item ? (
          <Text>Add something</Text>
        ) : (
          <View>
            <Text>{item.name}</Text>
          </View>
        )}
      </TouchableOpacity>
    );
  };

  const savePress = () => {
    const newItem: { [key: string]: AgendaEntry[] } = {
      [currentDay]: [{ name: title, height: 20, day: currentDay }],
    };
    setItems({ ...newItem, ...items });
    setInfo('');
    setTitle('');
    setIsOpen(false);
  };

  return (
    <View style={{ flex: 1 }}>
      <Agenda
        items={items}
        renderItem={renderItem}
        onDayPress={e => {
          setCurrentDay(e.dateString);
          setIsOpen(true);
        }}
        displayLoadingIndicator={false}
        showSixWeeks={true}
      />

      <Modal visible={isOpen}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <View style={{ justifyContent: 'center', alignItems: 'center', width: 300 }}>
            <Text>Create new note</Text>
            <CustomTextInput placeholder={'enter title'} value={title} setValue={setTitle} />
          </View>
          <View style={{ flexDirection: 'row', width: 200, justifyContent: 'space-between' }}>
            <AppButton title={'save'} onPress={savePress} backgroundColor={'yellow'} />
            <AppButton
              title={'cancel'}
              onPress={() => {
                console.log('items', items);
                setItems({ ...items });
                setIsOpen(false);
              }}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};
