import { useContext } from 'react'
import { TransactionsContext } from '../contexts/TransactionsContext'

export function useSummary() {
  const { transactions } = useContext(TransactionsContext)

  const summary = transactions.reduce(
    (acc, current) => {
      if (current.type === 'income') acc.icome += current.price
      else acc.outcome += current.price

      acc.total = acc.icome - acc.outcome

      return acc
    },
    {
      icome: 0,
      outcome: 0,
      total: 0,
    },
  )

  return summary
}
