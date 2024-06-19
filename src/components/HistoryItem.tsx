import { FC } from "react";
import { TransactionItem, useTransactionContext } from "../context/TransactionContext";

type HistoryItemProps = {transaction:TransactionItem}

export const HistoryItem : FC<HistoryItemProps> = ({transaction:{id, text, amount}}) => {

  const {delTransaction, hideExpense} = useTransactionContext();

  return (
    <li
      tabIndex={0}
      className= {amount>=0 ? "plus" : "minus"}
    >
      {text}
      <span>{hideExpense ? "-" : amount}</span>
      <button
        className="delete-btn"
        onClick={()=>delTransaction(id)}
      >
        x
      </button>
    </li>
  )
}