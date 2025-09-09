import * as Device from 'expo-device';
import * as Notifications from 'expo-notifications';
import { Platform } from 'react';

// požádej o oprávnění + vrať Expo push token (na později)
export async function registerForPushNotificationsAsync() {
  if (!Device.isDevice) return null;

  const settings = await Notifications.getPermissionsAsync();
  let status = settings.status;

  if (status !== 'granted') {
    const req = await Notifications.requestPermissionsAsync();
    status = req.status;
  }
  if (status !== 'granted') {
    console.warn('Notification permissions not granted');
    return null;
  }

  // na Androidu je dobré vytvořit kanál
  if (Platform.OS === 'android') {
    await Notifications.setNotificationChannelAsync('default', {
      name: 'default',
      importance: Notifications.AndroidImportance.DEFAULT
    });
  }

  try {
    const token = (await Notifications.getExpoPushTokenAsync()).data;
    return token; // můžeš uložit na server
  } catch {
    return null;
  }
}

// naplánuj lokální připomínku k lekci
export async function scheduleLessonReminder(lesson, minutesBefore = 10) {
  const start = new Date(lesson.start); // ISO string
  const fireAt = new Date(start.getTime() - minutesBefore * 60 * 1000);

  if (fireAt <= new Date()) return; // neplánuj minulost

  await Notifications.scheduleNotificationAsync({
    content: {
      title: `${lesson.subject}`,
      body: `Za ${minutesBefore} min: ${lesson.topic}`,
      data: { lessonId: lesson.id }
    },
    trigger: fireAt
  });
}
