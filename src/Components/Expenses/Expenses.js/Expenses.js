import React from "react";
import Card from "../../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import { expenses } from "../../Constants/ExpenseData";

function Expenses() {
  return (
    <Card className="expenses">
      {expenses.map((expense) => (
        <ExpenseItem
          date={expense.date}
          title={expense.title}
          amount={expense.amount}
        />
      ))}
    </Card>
  );
}

export default Expenses;
