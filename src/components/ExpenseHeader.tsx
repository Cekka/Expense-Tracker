import { useTransactionContext } from '../context/TransactionContext';
import './ExpenseHeader.css'

export const ExpenseHeader = () => {
  const {isDarkToggle} = useTransactionContext();
  return (
      <div className='title-container'>
        <h2 className="expense-tracker-title">Expense Tracker 💸</h2>
        <div className='toggle-container'>
          <input
            type="checkbox"
            className="checkbox"
            id="checkbox"
            onClick={isDarkToggle}
            />
          <label htmlFor="checkbox" className="checkbox-label">
            <span className="ball"></span>
          </label>
        </div>

      </div>
  )
}