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
  transactions: Transaction[]
}

interface TransactionsContextProps {
  children: ReactNode
}

export const TransactionsContext = createContext({} as TransactionsContextType)

export function TransactionsProvider({children}: TransactionsContextProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  async function loadTransaction() {
    const response = await fetch("http://localhost:3333/transactions")
    const data = await response.json()

    setTransactions(data)
  }

  useEffect(() => { loadTransaction() },[])
  return(
    <TransactionsContext.Provider value={{transactions}}>
      {children}
    </TransactionsContext.Provider>
  )
}