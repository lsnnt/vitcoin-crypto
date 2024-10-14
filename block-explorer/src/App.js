import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import SearchBar from './components/SearchBar';

const App = () => {
    const [transactions, setTransactions] = useState([]);
    const [loading, setLoading] = useState(false); // Add loading state

    const handleSearch = (transactionId) => {
        setLoading(true); // Set loading to true

        const rpcUrl = 'https://testnode.nnnt.shop';

        const body = JSON.stringify({
            jsonrpc: "2.0",
            method: "eth_getTransactionByHash",
            params: [transactionId],
            id: 1
        });

        fetch(rpcUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: body
        })
            .then(response => response.json())
            .then(data => {
                console.log('Response data:', data);
                if (data.error) {
                    console.error('Error fetching transaction:', data.error);
                    setTransactions([]);
                } else {
                    if (data.result) {
                        setTransactions([data.result]); // Replace transactions state
                    } else {
                        console.error('Transaction not found');
                    }
                }
            })
            .catch(error => {
                console.error('Error fetching transaction:', error);
            })
            .finally(() => {
                setLoading(false); // Set loading to false
            });
    };

    return (
        <Router>
            <Navbar />
            <SearchBar onSearch={handleSearch} />
            {loading ? <div>Loading...</div> : (
                <Switch>
                    <Route path="/" exact>
                        <Dashboard transactions={transactions} />
                    </Route>
                    {/* Other routes */}
                </Switch>
            )}
        </Router>
    );
};

export default App;
