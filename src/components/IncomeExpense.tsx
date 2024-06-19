import { useTransactionContext } from "../context/TransactionContext";
import { setToLocaleString } from "../utils/setToLocaleString";
import './IncomeExpense.css'

export const IncomeExpense = () => {
  const {transactions, hideExpense} = useTransactionContext();
  const incomes = transactions.reduce(
    (previousValue, item) => {
      if (item.amount >= 0) {
        return previousValue + item.amount
      }
      return previousValue
    }, 0);
  const expenses = transactions.reduce(
    (previousValue, item) => {
      if (item.amount <= 0) {
        return previousValue + item.amount
      }
      return previousValue
    }, 0);

  return (
    <div className="inc-exp-container">
      <div>
        <h4>INCOME</h4>
        <p className="money plus">
          {hideExpense ? "-" : setToLocaleString(incomes)}
        </p>
      </div>
      <div>
        <h4>EXPENSE</h4>
        <p className="money minus">
          {hideExpense ? "-" : setToLocaleString(Math.abs(expenses))}
        </p>
      </div>
    </div>
  )
}