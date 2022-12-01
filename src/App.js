import React, { useState } from 'react'
import './'
import Expenses from './components/expenses/Expenses';
import NewExpense from './components/newexpense/NewExpense';


const DUMMY_EXPENSES = [];


function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES)

  const addExpenseHandler = (expense) => {
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddData={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  )
}

export default App
