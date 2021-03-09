import React, { useContext } from 'react'
import { GlobalContext } from "../context/GlobalState"

export default function Transaction({ transaction }) {
    const { deleteTransaction } = useContext(GlobalContext)
    const sign = transaction.amount > 0 ? "+" : ""
    // const sign = transaction.amount > 0 ? "+" : transaction.amount == 0 ? "" : "-"
    
    return (
        <div>
            <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
                {transaction.text} <span>{sign}{transaction.amount}</span>
                <button className="delete-btn" onClick={() => deleteTransaction(transaction.id)}>
                    x
                </button>
            </li>
        </div>
    )
}
