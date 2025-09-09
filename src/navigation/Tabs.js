import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

import ScheduleScreen from '../screens/ScheduleScreen';

const Tab = createBottomTabNavigator();

export default function Tabs() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === 'Rozvrh') {
              iconName = 'calendar';
            } else {
              iconName = 'home';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Rozvrh" component={ScheduleScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
