import { useContextSelector } from 'use-context-selector'
import { TransactionsContext } from '../contexts/TransactionsContext'

export function useSummary() {
  const transactions = useContextSelector(TransactionsContext, (context) => {
    return context.transactions
  })

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
