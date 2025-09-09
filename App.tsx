import React, { useEffect } from 'react';
import Tabs from './src/navigation/Tabs';
import { ensureNotificationSetup } from './src/lib/notifications';

export default function App() {
  useEffect(() => { ensureNotificationSetup(); }, []);
  return <Tabs />;
}
