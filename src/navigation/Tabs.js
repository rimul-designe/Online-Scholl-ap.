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
      <Tab.Navigator screenOptions={{ headerTitleAlign: 'center' }}>
        <Tab.Screen name="Rozvrh" component={ScheduleScreen} />
        <Tab.Screen name="Úkoly" children={() => <Placeholder title="Úkoly" />} />
        <Tab.Screen name="Profil" children={() => <Placeholder title="Profil" />} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
