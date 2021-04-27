import React, { useState } from "react";
import Card from "../../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";

function Expenses({ expenses, onChangeFilter }) {


  return (
    <Card className="expenses">
      <ExpensesFilter onChangeFilter={onChangeFilter} />
      {expenses.length === 0 ? (
        <div>no Items found</div>
      ) : (
        expenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            date={expense.date}
            title={expense.title}
            amount={expense.amount}
          />
        ))
      )}
    </Card>
  );
}

export default Expenses;
