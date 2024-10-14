import React from 'react';
import './Dashboard.css';

const Dashboard = ({ transactions = [] }) => {
    console.log('Transactions:', transactions);

    if (transactions.length === 0) {
        return <div class ="notra">No transactions available.</div>;
    }

    const formatEther = (value) => {

        const bigIntNumber = parseInt(value, 16);
        const eth = (10**18);
        console.log(value,bigIntNumber,eth);
        var result = bigIntNumber/eth;

        // Define 10^18 as a BigInt
        

        // Divide the BigInt by 10^18
        // const result = bigIntNumber / divisor;
        return result;
    };
    

    return (
        <div>
            {transactions.map((transaction, index) => {
                console.log(transaction); // Log each transaction
                return (
                    <div className="transaction" key={index}>
                        <p><strong>From:</strong> {transaction.from}</p>
                        <p><strong>To:</strong> {transaction.to}</p>
                        <p><strong>Value:</strong> {formatEther(transaction.value)} ETH</p>
                        <p><strong>Transaction Hash:</strong> {transaction.hash}</p>
                        <p><strong>Block Number:</strong> {transaction.blockNumber}</p>
                        <p><strong>Gas Price:</strong> {formatEther(transaction.gasPrice)} ETH</p>
                    </div>
                );
            })}
        </div>
    );
};

export default Dashboard;
