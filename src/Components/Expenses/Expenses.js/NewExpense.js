import React, { useState } from "react";
import Card from "../../UI/Card";
import "./NewExpense.css";

function NewExpense({ addExpense }) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    const newExpense = {
      id: Math.random(),
      title: title,
      amount: amount,
      date: new Date(date),
    };
    addExpense(newExpense);
    setDate("");
    setTitle("");
    setAmount("");
  };

  return (
    <Card>
      <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="new-expense__control">
            <label>Amount</label>
            <input
              type="number"
              min={0.1}
              step={0.1}
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
          <button className="new-expense__actions" type="submit">
            Add Expense
          </button>
        </div>
      </form>
    </Card>
  );
}

export default NewExpense;
