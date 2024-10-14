// TransactionTable.js
import React from 'react';
import './TransactionTable.css';

const TransactionTable = ({ transactions }) => {
  return (
    <table className="transaction-table">
      <thead>
        <tr>
          <th>Transaction ID</th>
          <th>From</th>
          <th>To</th>
          <th>Amount</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map(transaction => (
          <tr key={transaction.id}>
            <td>{transaction.id}</td>
            <td>{transaction.from}</td>
            <td>{transaction.to}</td>
            <td>{transaction.amount}</td>
            <td>{transaction.status}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TransactionTable;
