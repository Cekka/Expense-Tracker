import { useState } from "react"
import { useTransactionContext } from "../context/TransactionContext";
import './AddTransaction.css'

export const AddTransaction = () => {

  const [text, setText] = useState<string>('');
  const [amount, setAmount] = useState<string>('');

  const handleTextChange = (e:any) => {
    setText(e.target.value);
  }

  const handleAmountChange = (e:any) => {
    setAmount(e.target.value);
  }

  const {addTransaction} = useTransactionContext();

  const handleAddTransaction = () => {
    if (text && amount) {
      addTransaction({id: Date.now(), text: text, amount: Number(amount)});
      setText('');
      setAmount('');
    } else {
      alert("Text and Amount can't be empty, Amount must be a number.");
    }
  }

  return (
    <>
      <h3>Add new transaction</h3>
      <div>
        <div>
          <label>Text</label>
          <input
            placeholder="Enter text..."
            type="text"
            value={text}
            onChange={handleTextChange}
          ></input>
        </div>
        <div>
          <label>Amount <br/> (positive = income, negative = expense)</label>
          <input
            placeholder="Enter amount..."
            type="number"
            value={amount}
            onChange={handleAmountChange}
          ></input>
        </div>
        <button
          className="btn"
          onClick={handleAddTransaction}
        >
            Add transaction
        </button>
      </div>
    </>
  )
}