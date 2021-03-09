import React, { createContext, useReducer } from 'react'
import Appreducer from './Appreducer'

const initialState = {
    transactions: []
}

export const GlobalContext = createContext(initialState)

export default function GlobalProvider({ children }) {
    const [state, dispatch] = useReducer(Appreducer, initialState)

    function addTransaction(transaction) {
        dispatch({ type: "ADD_TRANSACTION", payload: transaction })
    }

    function deleteTransaction(id) {
        dispatch({ type: "DELETE_TRANSACTION", payload: id })
    }

    return (
        <GlobalContext.Provider value={{
            transactions: state.transactions,
            addTransaction,
            deleteTransaction
        }}>
            {children}
        </GlobalContext.Provider>
    )
}
