import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "../lib/axios";

interface Transaction {
  id: number
  description: string,
  type: "income" | "outcome",
  category: string,
  price: number,
  createdAt: string
}

interface TransactionsContextType {
  transactions: Transaction[],
  fetchTransaction: (query?: string) => Promise<void>
}

interface TransactionsContextProps {
  children: ReactNode
}

export const TransactionsContext = createContext({} as TransactionsContextType)

export function TransactionsProvider({children}: TransactionsContextProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  async function fetchTransaction(query?: string) {

    const response = await api.get('/transactions', {
      params: {
        q: query
      }
    })

    setTransactions(response.data)
  }

  useEffect(() => { fetchTransaction() },[])

  return(
    <TransactionsContext.Provider value={{transactions, fetchTransaction}}>
      {children}
    </TransactionsContext.Provider>
  )
}