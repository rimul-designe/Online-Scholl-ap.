import * as Notifications from 'expo-notifications';

// Funkce pro naplánování notifikace
export async function scheduleNotification(title, body, trigger) {
  await Notifications.scheduleNotificationAsync({
    content: {
      title,
      body,
    },
    trigger, // např. { seconds: 5 } nebo konkrétní čas
  });
}

// Funkce pro zrušení všech notifikací
export async function cancelAllNotifications() {
  await Notifications.cancelAllScheduledNotificationsAsync();
}
