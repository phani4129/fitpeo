// src/components/RecentOrdersTable.js
import React from 'react';
import styled from 'styled-components';

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
`;

const TableHeader = styled.th`
  background-color: #414357;
  padding: 10px;
  text-align: left;
`;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #2D2F41;
  }
`;

const TableData = styled.td`
  padding: 10px;
`;

const RecentOrdersTable = () => {
  const orders = [
    { customer: 'Wade Warren', orderNo: '15478256', amount: '$124.00', status: 'Delivered' },
    { customer: 'Jane Cooper', orderNo: '48967586', amount: '$305.02', status: 'Delivered' },
    { customer: 'Guy Hawkins', orderNo: '78958215', amount: '$54.88', status: 'Cancelled' },
    { customer: 'Kristin Watson', orderNo: '20965732', amount: '$65.00', status: 'Pending' },
  ];

  return (
    <Table>
      <thead>
        <TableRow>
          <TableHeader>Customer</TableHeader>
          <TableHeader>Order No.</TableHeader>
          <TableHeader>Amount</TableHeader>
          <TableHeader>Status</TableHeader>
        </TableRow>
      </thead>
      <tbody>
        {orders.map((order, index) => (
          <TableRow key={index}>
            <TableData>{order.customer}</TableData>
            <TableData>{order.orderNo}</TableData>
            <TableData>{order.amount}</TableData>
            <TableData>{order.status}</TableData>
          </TableRow>
        ))}
      </tbody>
    </Table>
  );
};

export default RecentOrdersTable;
