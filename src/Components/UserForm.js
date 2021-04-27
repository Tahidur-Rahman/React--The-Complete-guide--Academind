import React, { useState } from "react";
import Card from "./UI/Card";
import "./UserForm.css";

function UserForm({ addUser, setModal, setText }) {
  const [userName, setUserName] = useState("");
  const [age, setAge] = useState("");

  const userNameHandler = (e) => setUserName(e.target.value);
  const ageHandler = (e) => setAge(e.target.value);
  const submitHandler = (e) => {
    e.preventDefault();
    const userData = {
      username: userName,
      age: age,
    };
    if (+userData.username) {
      setModal(true);
      setText("Invalid User Input");
    } else addUser(userData);

    setUserName("");
    setAge("");
  };
  return (
    <Card>
      <form className="form" onSubmit={submitHandler}>
        <div className="form-element">
          <label htmlFor="username">Username </label>
          <input
            value={userName}
            onChange={userNameHandler}
            type="text"
            name="username"
            minLength={5}
            maxLength={10}
          />
        </div>
        <div className="form-element">
          <label htmlFor="age">Age </label>
          <input
            value={age}
            onChange={ageHandler}
            type="number"
            name="age"
            min={1}
            max={100}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </Card>
  );
}

export default UserForm;
