import React, { useState } from "react";
import { IoAdd } from "react-icons/io5";
import "../styles/style.css";

const Form = (props) => {
  const inputTextHandler = (event) => {
    props.setInputText(event.target.value);
  };

  const submitTodoHandler = (event) => {
    event.preventDefault();
    props.setTodos([
      ...props.todos, // add all todos here if exist and add a new todo
      { text: props.inputText, completed: false, id: Math.random() * 1000 },
    ]);
    props.setInputText("");
  };

  const statusHandler = (event) => {
    // console.log(event.target.value);
    props.setStatus(event.target.value);
  };

  return (
    <form>
      <input
        type="text"
        value={props.inputText}
        onChange={inputTextHandler}
        className="todo-input"
      />
      <button type="submit" onClick={submitTodoHandler} className="todo-button">
        <IoAdd />
      </button>
      <div className="select">
        <select onChange={statusHandler} name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="complete">Completed</option>
          <option value="incomplete">Incomplete</option>
        </select>
      </div>
    </form>
  );
};

export default Form;
