import React, { createContext, useMemo } from 'react';

export const TransactionsContext = createContext();

export const TransactionsProvider = ({ children }) => {
  const transactions = useMemo(() => [
    { id: '1', name: 'Groceries', amount: 50, date: '2024-10-28' },
    { id: '2', name: 'Rent', amount: 1200, date: '2024-10-01' },
    { id: '3', name: 'Internet Bill', amount: 60, date: '2024-10-05' },
  ], []);

  return (
    <TransactionsContext.Provider value={{ transactions }}>
      {children}
    </TransactionsContext.Provider>
  );
};
