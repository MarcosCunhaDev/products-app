import {Alert, NativeModules, PermissionsAndroid} from 'react-native';
const {CalendarModule} = NativeModules;

export const requestCalendarPermission = async (): Promise<boolean> => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.WRITE_CALENDAR,
      {
        title: 'Calendar Permission',
        message: 'This app needs access to your calendar to add reminders.',
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      },
    );

    return granted === PermissionsAndroid.RESULTS.GRANTED;
  } catch (error) {
    if (error instanceof Error) {
      Alert.alert('Error', error.message);
    } else {
      Alert.alert('Error', 'Failed to request calendar permissions.');
    }
    return false;
  }
};

export const addReminderToCalendar = async (
  startDate: Date,
  endDate: Date,
  productTitle: string = 'Product',
) => {
  const title = 'Product Purchase Reminder';
  const description = `Reminder to purchase the ${productTitle}`;

  try {
    const hasPermission = await requestCalendarPermission();

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
