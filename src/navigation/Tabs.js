// src/navigation/Tabs.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text, View } from 'react-native';
import ScheduleScreen from '../screens/ScheduleScreen';

const Tab = createBottomTabNavigator();

function Placeholder({ title }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 18 }}>{title}</Text>
    </View>
  );
}

export default function Tabs() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: true }}>
        <Tab.Screen name="Rozvrh" component={ScheduleScreen} />
        <Tab.Screen name="Úkoly">
          {() => <Placeholder title="Úkoly – coming soon" />}
        </Tab.Screen>
        <Tab.Screen name="Profil">
          {() => <Placeholder title="Profil – coming soon" />}
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}
