// src/components/CustomerFeedback.js
import React from 'react';
import styled from 'styled-components';

const FeedbackContainer = styled.div`
  margin-top: 20px;
  background-color: #2D2F41;
  padding: 20px;
  border-radius: 10px;
`;

const FeedbackItem = styled.div`
  margin-bottom: 20px;
`;

const CustomerFeedback = () => {
  const feedbacks = [
    {
      customer: 'Jenny Wilson',
      feedback: 'The food was excellent and so was the service. I had the mushroom risotto with scallops which was awesome.',
      rating: 5,
    },
    {
      customer: 'Dianne Russell',
      feedback: 'We enjoyed the Eggs Benedict served on homemade focaccia bread and hot coffee. Perfect service.',
      rating: 4,
    },
    {
      customer: 'Devon Lane',
      feedback: 'Normally are wings, but theirs are lean meaty and tender, and the sauce is the best around.',
      rating: 5,
    },
  ];

  return (
    <FeedbackContainer>
      {feedbacks.map((item, index) => (
        <FeedbackItem key={index}>
          <h4>{item.customer}</h4>
          <p>{item.feedback}</p>
          <p>Rating: {'⭐'.repeat(item.rating)}</p>
        </FeedbackItem>
      ))}
    </FeedbackContainer>
  );
};

export default CustomerFeedback;
