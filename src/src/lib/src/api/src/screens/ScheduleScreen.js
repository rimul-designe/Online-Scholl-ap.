import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Button, StyleSheet } from 'react-native';
import { fetchLessons } from '../api/lessons';
import { registerForPushNotificationsAsync, scheduleLessonReminder } from '../lib/notifications';

export default function ScheduleScreen() {
  const [lessons, setLessons] = useState([]);

  useEffect(() => {
    setLessons(fetchLessons());
    registerForPushNotificationsAsync(); // požádej o oprávnění
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.subject}>{item.subject}</Text>
      <Text style={styles.topic}>{item.topic}</Text>
      <Text style={styles.time}>{new Date(item.start).toLocaleTimeString([], {hour:'2-digit', minute:'2-digit'})} – {new Date(item.end).toLocaleTimeString([], {hour:'2-digit', minute:'2-digit'})}</Text>
      <Text style={styles.teacher}>Učitel: {item.teacher}</Text>
      <View style={{height:8}} />
      <Button title="Připomenout 10 min předem" onPress={() => scheduleLessonReminder(item, 10)} />
    </View>
  );

  return (
    <FlatList
      contentContainerStyle={{ padding: 16 }}
      data={lessons}
      keyExtractor={i => i.id}
      renderItem={renderItem}
      ListEmptyComponent={<Text>Žádné lekce pro dnešek.</Text>}
    />
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    elevation: 2
  },
  subject: { fontSize: 18, fontWeight: '700' },
  topic: { marginTop: 4, fontSize: 16 },
  time: { marginTop: 4, color: '#555' },
  teacher: { marginTop: 2, color: '#555' }
});
