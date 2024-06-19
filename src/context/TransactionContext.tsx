import { ReactElement, createContext, useContext, useState } from "react"

export type TransactionItem = {id: number, text:string, amount: number}

export type TransactionContextState = {
  transactions: TransactionItem[],
  hideExpense: boolean,
  isDark: boolean,
  addTransaction: (transaction : TransactionItem) => void,
  delTransaction: (id:number) => void,
  hideExpenseToggle: () => void,
  isDarkToggle: () => void
}

const initialState: TransactionContextState = {
  transactions: [],
  hideExpense: false,
  isDark: false,
  addTransaction: () => {},
  delTransaction: () => {},
  hideExpenseToggle: () => {},
  isDarkToggle: () => {}
}

export const TransactionContext = createContext(initialState);

export const useTransactionContext = () => {
  const context = useContext(TransactionContext);

  if(!context) {
    throw new Error("useTransactionContext must be used within the TransactionProvider");
  }

  return context;
}

export const TransactionProvider = ({children}: {children: ReactElement}) => {
  const [transactions, setTransactions] = useState<TransactionItem[]>([]);
  const [hideExpense, setHideExpense] = useState<boolean>(false);
  const [isDark, setIsDark] = useState<boolean>(false);

  const addTransaction = (transaction : TransactionItem) => {
    setTransactions((previousTransactions)=>
      [...previousTransactions, transaction]);
  }

  const delTransaction = (id:number) => {
    setTransactions((previousTransactions)=>
      previousTransactions.filter((value) => value.id !== id)
    );
  }

  const hideExpenseToggle = () => {
    setHideExpense(previusValue =>
      !previusValue
    );
  }

  const isDarkToggle = () => {
    setIsDark(previusValue =>
      !previusValue
    );
  }

  return(
    <TransactionContext.Provider value={{transactions, hideExpense, isDark, addTransaction, delTransaction, hideExpenseToggle, isDarkToggle}}>
      {children}
    </TransactionContext.Provider>
  )
}