import { useTransactionContext } from "../context/TransactionContext";
import { IncomeExpense } from "./IncomeExpense"
import './BalanceView.css'
import { setToLocaleString } from "../utils/setToLocaleString";
import { EyeFilled, EyeInvisibleFilled } from "@ant-design/icons";

export const BalanceView = () => {
  const {transactions, hideExpenseToggle, hideExpense} = useTransactionContext();
  const balance = transactions.reduce((previousValue, item) => previousValue + item.amount ,0);

  const handleHideShow = () => {
    hideExpenseToggle();
  }

  return (
    <>
      <div className='balance-container'>
        <h4>YOUR BALANCE</h4>
        <button
          className='hide-show-btn'
          onClick={handleHideShow}
          >
          {hideExpense ? <EyeFilled className="eye-icon"/> : <EyeInvisibleFilled className="eye-icon" />}
        </button>
      </div>
      <h1>{hideExpense ? "-" : setToLocaleString(balance)}</h1>
      <IncomeExpense/>
    </>
  )
}