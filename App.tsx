import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Button } from "react-native";

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{ fontSize: 22, marginBottom: 20 }}>Online School App</Text>
      <Button title="Žák - přihlášení" onPress={() => navigation.navigate("Student")} />
      <Button title="Učitel - přihlášení" onPress={() => navigation.navigate("Teacher")} />
    </View>
  );
}

function StudentScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{ fontSize: 18 }}>Formulář pro žáka (výběr předmětů, časů)</Text>
    </View>
  );
}

function TeacherScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{ fontSize: 18 }}>Formulář pro učitele (nastavení hodin, sazby)</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Student" component={StudentScreen} />
        <Stack.Screen name="Teacher" component={TeacherScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
