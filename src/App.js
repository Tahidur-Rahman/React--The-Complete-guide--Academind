import Expenses from "./Components/Expenses/Expenses.js/Expenses";
import React, { useState } from "react";
import NewExpense from "./Components/Expenses/Expenses.js/NewExpense";

function App() {
  const [expenses, setExpenses] = useState([{
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },]);
  const [selectedYear, setSelectedYear] = useState();

  const submitData = (e) => setExpenses((expense) => [...expense, e]);

  const onChangeFilter = (e) => setSelectedYear(e);

  const FilteredExpense = expenses.filter(
    (expense) => expense.date.getFullYear() === Number(selectedYear)
  );

  return (
    <div className="App">
      <div>
        <h3>Expenses tracker App</h3>
      </div>
      <NewExpense addExpense={submitData} />
      <Expenses expenses={FilteredExpense} onChangeFilter={onChangeFilter} />
    </div>
  );
}

export default App;
