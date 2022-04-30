import React from "react";
import "../styles/style.css";
import Todo from "./Todo";

const TodoList = (props) => {
  // console.log(props.todos);
  // console.log(props.filteredTodos);
  return (
    <>
      <div className="todo-container">
        <ul className="todo-list">
          {props.filteredTodos.map((todo) => (
            <Todo
              text={todo.text}
              key={todo.id}
              todos={props.todos}
              setTodos={props.setTodos}
              todo={todo}
            />
          ))}
        </ul>
      </div>
    </>
  );
};

export default TodoList;
