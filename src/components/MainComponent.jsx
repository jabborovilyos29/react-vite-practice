import React from "react";
import { AddTodo } from "./AddTodo";
import { TodoListItem } from "./TodoListItem";
import { useSelector } from "react-redux";

export function MainComponent() {
  const todoList = useSelector((state) => state.rootReducer.todoList);

  return (
    <div className="mainContainer">
      <AddTodo />
      {todoList?.map((item) => {
        return <TodoListItem key={item.id} item={item} />;
      })}
    </div>
  );
}
