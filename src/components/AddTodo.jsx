import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addTodo,
  cancelEdit,
  changeTodo,
} from "../store/actions/action";


export function AddTodo() {
  const emptyTodo = useSelector((state) => state.rootReducer.emptyTodo);

  const dispath = useDispatch();

  const handleChange = (evt) => {
    dispath(
      changeTodo({
        name: evt.target.name,
        value: evt.target.value,
      }),
    );
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    dispath(addTodo(emptyTodo));
  };

  const handleCancel = (evt) => {
    evt.preventDefault();
    dispath(cancelEdit());
  };

  return (
    <div className="addTodoContainer">
      <h4 className="addTodoTitle">add todo</h4>
      <form
        onSubmit={(evt) => handleSubmit(evt)}
        className="addTodoInputContainer"
      >
        <div className="todoInputs">
          <input
            name="title"
            value={emptyTodo?.title || ""}
            onChange={(evt) => handleChange(evt)}
            required
            className="addTodoInput"
            type="text"
            placeholder="title..."
          />
          <input
            name="description"
            value={emptyTodo?.description || ""}
            onChange={(evt) => handleChange(evt)}
            required
            className="addTodoInput"
            type="text"
            placeholder="description..."
          />
        </div>
        <button className="addButton">
          {(emptyTodo.id === null && "add") || "edit"}
        </button>
        {emptyTodo.id !== null && (
          <button onClick={(evt) => handleCancel(evt)} className="addButton">
            cancel
          </button>
        )}
      </form>
    </div>
  );
}
