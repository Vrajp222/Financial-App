import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import TransactionsStackNavigator from './TransactionsStackNavigator';
import Summary from '../screens/Summary';

const Tab = createBottomTabNavigator();

const MainTabNavigator = () => (
  <NavigationContainer>
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === 'Transactions') {
            iconName = 'list';
          } else if (route.name === 'Summary') {
            iconName = 'pie-chart';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#f57c00',
        tabBarInactiveTintColor: '#888',
        tabBarStyle: { backgroundColor: '#333' },
        headerShown: false,
      })}
    >
      <Tab.Screen name="Transactions" component={TransactionsStackNavigator} />
      <Tab.Screen name="Summary" component={Summary} />
    </Tab.Navigator>
  </NavigationContainer>
);

export default MainTabNavigator;
