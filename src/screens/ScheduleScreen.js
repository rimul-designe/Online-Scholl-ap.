import React, { useState } from 'react';
import { View, Text, Button, FlatList } from 'react-native';
import { scheduleNotification } from '../lib/notifications';

// Ukázková data rozvrhu
const lessons = [
  { id: '1', subject: 'Matematika', time: '08:00' },
  { id: '2', subject: 'Český jazyk', time: '09:00' },
  { id: '3', subject: 'Dějepis', time: '10:00' },
];

export default function ScheduleScreen() {
  const [scheduled, setScheduled] = useState([]);

  const handleNotify = (lesson) => {
    scheduleNotification(
      `Začíná hodina: ${lesson.subject}`,
      `Čas: ${lesson.time}`,
      { seconds: 5 } // test: notifikace přijde za 5s
    );
    setScheduled((prev) => [...prev, lesson.subject]);
  };

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 20, marginBottom: 10 }}>Rozvrh hodin</Text>
      <FlatList
        data={lessons}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View
            style={{
              marginBottom: 15,
              padding: 10,
              borderWidth: 1,
              borderRadius: 8,
            }}
          >
            <Text style={{ fontSize: 16 }}>
              {item.subject} – {item.time}
            </Text>
            <Button
              title="Připomenout"
              onPress={() => handleNotify(item)}
            />
          </View>
        )}
      />
      <Text style={{ marginTop: 20 }}>
        Naplánované připomínky: {scheduled.join(', ')}
      </Text>
    </View>
  );
}
