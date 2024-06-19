import { useTransactionContext } from "../context/TransactionContext";
import { HistoryItem } from "./HistoryItem"
import './HistoryList.css'

export const HistoryList = () => {

  const {transactions} = useTransactionContext();

  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {transactions.map((transaction, index) =>
        <HistoryItem
          transaction={transaction}
          key={index}
        />
        )}
      </ul>
    </>
  )
}