// App.tsx
import React, { useEffect } from 'react';
import * as Notifications from 'expo-notifications';
import Tabs from './src/navigation/Tabs';
import { ensureNotificationSetup } from './src/lib/notifications';

export default function App() {
  useEffect(() => {
    // požádáme o oprávnění hned po startu
    ensureNotificationSetup();
  }, []);

  return <Tabs />;
}
