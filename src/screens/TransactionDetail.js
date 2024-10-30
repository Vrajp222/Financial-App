import React from 'react';
import styled from 'styled-components/native';

const TransactionDetail = ({ route }) => {
  const { transaction } = route.params;

  return (
    <Container>
      <Title>{transaction.name}</Title>
      <DetailText>Amount: ${transaction.amount}</DetailText>
      <DetailText>Date: {transaction.date}</DetailText>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  background-color: #181818;
  padding: 20px;
`;

const Title = styled.Text`
  color: #f57c00;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const DetailText = styled.Text`
  color: #ddd;
  font-size: 18px;
`;

export default TransactionDetail;
