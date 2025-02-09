import React, {useState} from 'react';
import {Button, View} from 'react-native';
import DatePicker from 'react-native-date-picker';
import {addReminderToCalendar} from '@native/calendar';
import {useTheme} from 'styled-components';

export const ProductReminder = ({
  productName = 'Product',
}: {
  productName: string;
}) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = async (date: Date) => {
    if (date) {
      setSelectedDate(date);
      setModalVisible(false);
      const startDate = date;
      const endDate = new Date(date.getTime() + 30 * 60 * 1000); // 30 minutes later
      await addReminderToCalendar(startDate, endDate, productName);
    }
  };

  return (
    <View style={{padding: 20}}>
      {/* TODO: refactor this button with icons */}
      <Button title="Schedule Reminder" onPress={() => setModalVisible(true)} />
      <DatePicker
        modal
        open={isModalVisible}
        date={selectedDate}
        onConfirm={date => {
          handleDateChange(date);
        }}
        onCancel={() => {
          setModalVisible(false);
        }}
      />
    </View>
  );
};
