import React, { useContext } from 'react';
import { FlatList, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { TransactionsContext } from '../context/TransactionsContext';

const TransactionsList = ({ navigation }) => {
  const { transactions } = useContext(TransactionsContext);

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate('TransactionDetail', { transaction: item })}>
      <TransactionItem>
        <TransactionText>{item.name}</TransactionText>
        <TransactionText>${item.amount}</TransactionText>
        <TransactionText>{item.date}</TransactionText>
      </TransactionItem>
    </TouchableOpacity>
  );

  return (
    <Container>
      <FlatList
        data={transactions}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  background-color: #181818;
  padding: 20px;
`;

const TransactionItem = styled.View`
  background-color: #333;
  padding: 15px;
  margin-bottom: 10px;
  border-radius: 10px;
`;

const TransactionText = styled.Text`
  color: #ddd;
`;

export default TransactionsList;
