import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text, View, Button, ScrollView } from "react-native";

import ApplicationWizard from "./src/screens/ApplicationWizard";

function Placeholder({ title, children }: any) {
  return (
    <ScrollView contentContainerStyle={{ padding: 16, gap: 12 }}>
      <Text style={{ fontSize: 20, fontWeight: "600" }}>{title}</Text>
      <View>{children}</View>
    </ScrollView>
  );
}

function ScheduleScreen() {
  // dočasně mock; přidáme „Rozvrh“ ve 2. dávce
  const items = [
    { id: "1", day: "Po", time: "16:00–16:45", subject: "Matematika" },
    { id: "2", day: "St", time: "17:00–17:45", subject: "ČJ" }
  ];
  return (
    <Placeholder title="Rozvrh (MVP)">
      {items.map((i) => (
        <View key={i.id} style={{ padding: 12, borderBottomWidth: 1 }}>
          <Text>{i.day} {i.time} · {i.subject}</Text>
        </View>
      ))}
      <Text style={{ marginTop: 8, opacity: 0.7 }}>
        Součet online bloků: 90 min (demo). Kratší bloky se sčítají.
      </Text>
    </Placeholder>
  );
}

function GradebookScreen() {
  // přidáme hodnocení detailně ve 2. dávce
  const items = [
    { id: "1", subject: "Matematika", type: "Test", value: "1-" },
    { id: "2", subject: "ČJ", type: "Projekt", value: "Splněno" }
  ];
  return (
    <Placeholder title="Třídní kniha & hodnocení (MVP)">
      {items.map((i) => (
        <View key={i.id} style={{ padding: 12, borderBottomWidth: 1 }}>
          <Text>{i.subject} · {i.type}: {i.value}</Text>
        </View>
      ))}
    </Placeholder>
  );
}

function ConsultationsScreen() {
  return (
    <Placeholder title="Konzultace (MVP)">
      <Text>Rezervace online konzultací s učiteli – napojíme na Zoom/Meet.</Text>
      <View style={{ height: 8 }} />
      <Button title="Naplánovat konzultaci" onPress={() => {}} />
    </Placeholder>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: true }}>
        <Tab.Screen name="Žádost" component={ApplicationWizard} />
        <Tab.Screen name="Rozvrh" component={ScheduleScreen} />
        <Tab.Screen name="Dokumentace" component={GradebookScreen} />
        <Tab.Screen name="Konzultace" component={ConsultationsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
