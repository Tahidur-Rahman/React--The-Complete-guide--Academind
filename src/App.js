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

  return (
    <div className="App">
      <div>
        <h3>Expenses tracker App</h3>
      </div>
      <NewExpense addExpense={submitData}/>
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
