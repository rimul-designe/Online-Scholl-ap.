import React, { useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import * as Notifications from 'expo-notifications';
import { getLessons } from '../api/lessons';

export default function ScheduleScreen() {
  const lessons = getLessons();

  useEffect(() => {
    // Naplánování notifikací pro hodiny
    lessons.forEach((lesson) => {
      const trigger = new Date(lesson.time); // čas začátku hodiny
      Notifications.scheduleNotificationAsync({
        content: {
          title: 'Začíná hodina 📚',
          body: `${lesson.subject} - ${lesson.topic}`,
        },
        trigger,
      });
    });
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Rozvrh hodin</Text>
      <FlatList
        data={lessons}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.lesson}>
            <Text style={styles.subject}>{item.subject}</Text>
            <Text>{item.topic}</Text>
            <Text style={styles.time}>{item.time}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#fff' },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 16 },
  lesson: { padding: 12, borderBottomWidth: 1, borderBottomColor: '#ddd' },
  subject: { fontSize: 18, fontWeight: '600' },
  time: { color: 'gray' },
});
