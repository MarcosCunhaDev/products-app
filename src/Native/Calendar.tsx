import {Alert, NativeModules} from 'react-native';
const {CalendarModule} = NativeModules;

export const addReminderToCalendar = async (
  startDate: Date,
  endDate: Date,
  productTitle: string = 'Product',
) => {
  const title = 'Product Purchase Reminder';
  const description = `Reminder to purchase the ${productTitle}`;

  try {
    const hasPermission = await CalendarModule.requestCalendarPermission();

    if (!hasPermission) {
      Alert.alert(
        'Permission Denied',
        'Calendar permission is required to add reminders.',
      );
      return;
    }

    const result = await CalendarModule.addEventToCalendar(
      title,
      description,
      startDate.getTime(),
      endDate.getTime(),
    );

    Alert.alert('Success', result);
  } catch (error) {
    if (error instanceof Error) {
      Alert.alert('Error', error.message || 'Failed to add event to calendar');
    } else {
      Alert.alert('Error', 'Failed to add event to calendar');
    }
  }
};
