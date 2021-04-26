import Expenses from "./Components/Expenses/Expenses.js/Expenses";
import React, { useState } from "react";
import NewExpense from "./Components/Expenses/Expenses.js/NewExpense";

function App() {
  const [expenses, setExpenses] = useState([
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    }
  ]);

  const submitData = e=> {
   setExpenses(expense => [...expense,e])
  }

  const onChangeFilter  = e => {
    console.log(e)
  }

  return (
    <div className="App">
      <div>
        <h3>Expenses tracker App</h3>
      </div>
      <NewExpense addExpense={submitData}/>
      <Expenses expenses={expenses} onChangeFilter={onChangeFilter}/>
    </div>
  );
}

export default App;
