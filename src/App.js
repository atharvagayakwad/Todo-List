import React, { useState, useEffect } from "react";
import "./styles/style.css";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

const App = () => {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  const filterHandler = () => {
    switch (status) {
      // showing completed ones
      case `complete`:
        setFilteredTodos(todos.filter((todo) => todo.completed === true));
        break;

      // showing incompleted ones
      case "incomplete":
        setFilteredTodos(todos.filter((todo) => todo.completed === false));
        break;

      // showing all tasks
      default:
        setFilteredTodos(todos);
        break;
    }
  };

  // saving to local storage
  const saveLocalTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const getLocalTodos = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem("todos"));
      setTodos(todoLocal);
    }
  };

  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  }, [todos, status]);

  useEffect(() => {
    getLocalTodos();
  }, []);

  return (
    <div className="App">
      <header>
        <h1> ToDo List </h1>
      </header>
      <Form
        inputText={inputText}
        setInputText={setInputText}
        setTodos={setTodos}
        todos={todos}
        setStatus={setStatus}
      />
      <TodoList
        inputText={inputText}
        todos={todos}
        setTodos={setTodos}
        filteredTodos={filteredTodos}
      />
    </div>
  );
};

export default App;
