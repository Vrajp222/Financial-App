import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TransactionsList from '../screens/TransactionsList';
import TransactionDetail from '../screens/TransactionDetail';

const Stack = createNativeStackNavigator();

const TransactionsStackNavigator = () => (
  <Stack.Navigator screenOptions={{ headerStyle: { backgroundColor: '#333' }, headerTintColor: '#f57c00' }}>
    <Stack.Screen name="TransactionsList" component={TransactionsList} options={{ title: 'Transactions' }} />
    <Stack.Screen name="TransactionDetail" component={TransactionDetail} options={{ title: 'Transaction Details' }} />
  </Stack.Navigator>
);

export default TransactionsStackNavigator;
