import React, { useContext } from 'react';
import styled from 'styled-components/native';
import { TransactionsContext } from '../context/TransactionsContext';

const Summary = () => {
  const { transactions } = useContext(TransactionsContext);

  const totalExpenses = transactions ? transactions.reduce((sum, transaction) => sum + transaction.amount, 0) : 0;

  return (
    <Container>
      <Title>Financial Summary</Title>
      <SummaryText>Total Expenses: ${totalExpenses.toFixed(2)}</SummaryText>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  padding: 20px;
  background-color: #181818;
`;

const Title = styled.Text`
  color: #f57c00;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const SummaryText = styled.Text`
  color: #ddd;
  font-size: 18px;
`;

export default Summary;
