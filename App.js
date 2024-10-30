import React from 'react';
import MainTabNavigator from './src/navigation/MainTabNavigator';
import { TransactionsProvider } from './src/context/TransactionsContext';

export default function App() {
  return (
    <TransactionsProvider>
      <MainTabNavigator />
    </TransactionsProvider>
  );
}
