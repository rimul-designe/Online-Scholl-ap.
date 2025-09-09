import React from 'react';
import * as Notifications from 'expo-notifications';
import Tabs from './src/navigation/Tabs';

// jak se mají zobrazovat notifikace, když je appka v popředí
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

export default function App() {
  return <Tabs />;
}
