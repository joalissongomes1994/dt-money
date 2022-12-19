import { createContext, ReactNode, useEffect, useState } from "react";

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
    const url = new URL('http://localhost:3333/transactions')

    query && url.searchParams.append('q', query)

    const response = await fetch(url)
    const data = await response.json()

    setTransactions(data)
  }

  useEffect(() => { fetchTransaction() },[])

  return(
    <TransactionsContext.Provider value={{transactions, fetchTransaction}}>
      {children}
    </TransactionsContext.Provider>
  )
}