export const DELETE_TODO = "DELETE_TODO";
export const ADD_TODO = "ADD_TODO";
export const EDIT_TODO = "EDIT_TODO";
export const CHECK_TODO = "CHECK_TODO";
export const CANCEL_EDIT = "CANCEL_EDIT";
export const CHANGE_TODO = "CHANGE_TODO";

export const addTodo = (payload) => ({
  type: ADD_TODO,
  payload,
});

export const deleteTodo = (payload) => ({
  type: DELETE_TODO,
  payload,
});
export const editTodo = (payload) => ({
  type: EDIT_TODO,
  payload,
});
export const checkTodo = (payload) => ({
  type: CHECK_TODO,
  payload,
});

export const cancelEdit = () => ({
  type: CANCEL_EDIT,
});

export const changeTodo = (payload) =>({
  type: CHANGE_TODO,
  payload,
})