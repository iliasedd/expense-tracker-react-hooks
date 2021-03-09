import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';

export default function Header() {
    const { transactions } = useContext(GlobalContext)
    const total = transactions.map(transaction => transaction.amount).reduce((acc, item) => (acc += item), 0)
    
    return (
        <>
            <h2>Expense Tracker</h2>
            <h4>Your Balance</h4>
            <h1>{total} MAD</h1>
        </>
    )
}
