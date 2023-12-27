import React from "react";
import { Draggable } from "drag-react";
import { useDispatch } from "react-redux";
import { checkTodo, deleteTodo, editTodo } from "../store/actions/action";

export function TodoListItem({ item }) {
  const dispath = useDispatch();

  const handleCheck = (value) => {
    dispath(
      checkTodo({
        id: item.id,
        checked: value,
      }),
    );
  };

  const handleDelete = (id) => {
    dispath(deleteTodo(id));
  };

  const handleEdit = (item) => {
    dispath(editTodo(item));
  };

  return (
    <Draggable style={item.style} className="todoListItem">
      <div className="todoSettings">
        <input
          type="checkbox"
          checked={item.checked}
          onChange={(e) => {
            handleCheck(e.target.checked);
          }}
          className="todoListCheckbox"
        />
        <span
          onClick={() => {
            handleEdit(item);
          }}
        >
          ✎
        </span>
        <span
          onClick={() => {
            handleDelete(item.id);
          }}
        >
          &#9932;
        </span>
      </div>
      <h4 className="todoText">
        {(item.checked && <strike>{item.title}</strike>) || item.title}
      </h4>
      <p className="todoText">
        {" "}
        {(item.checked && <strike>{item.description}</strike>) ||
          item.description}
      </p>
    </Draggable>
  );
}
