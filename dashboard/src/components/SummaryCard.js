// src/components/SummaryCard.js
import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  background-color: #2D2F41;
  padding: 20px;
  border-radius: 10px;
  margin: 10px;
  flex: 1;
  color: white;
`;

const SummaryCard = ({ title, value, icon }) => {
  return (
    <Card>
      <div>{icon}</div>
      <h3>{title}</h3>
      <p>{value}</p>
    </Card>
  );
};

export default SummaryCard;
