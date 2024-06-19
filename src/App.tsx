import React from 'react';
import './App.css';
import { BalanceView } from './components/BalanceView';
import { HistoryList } from './components/HistoryList';
import { AddTransaction } from './components/AddTransaction';
import { useTransactionContext} from './context/TransactionContext';
import { ExpenseHeader } from './components/ExpenseHeader';

function App() {
  const {isDark} = useTransactionContext();

  return (
    <div data-theme={isDark ? "dark" : "light"} className='app-container'>
        <ExpenseHeader/>
        <BalanceView/>
        <HistoryList/>
        <AddTransaction/>
    </div>
  );
}

export default App;
