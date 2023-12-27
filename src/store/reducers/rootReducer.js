import {
  ADD_TODO,
  EDIT_TODO,
  DELETE_TODO,
  CHECK_TODO,
  CANCEL_EDIT,
  CHANGE_TODO,
} from "../actions/action";

const initialData = {
  todoList: [],
  emptyTodo: {
    id: null,
    title: null,
    description: null,
    checked: false,
    style: null,
  },
};

export const rootReducer = (state = initialData, action) => {
  switch (action.type) {
    case CHANGE_TODO:
      return {
        ...state,
        emptyTodo: {
          ...state.emptyTodo,
          [action.payload.name]: action.payload.value,
          checked: false,
        },
      };
      break;
    case ADD_TODO:
      const newData = state.todoList.map((item) => {
        if (item.id !== null && item.id === state.emptyTodo.id) {
          return {
            ...item,
            title: action.payload.title,
            description: action.payload.description,
          };
        } else {
          return item;
        }
      });

      // (state.emptyTodo.id !== null &&
      //   ...newData)||

      if (state.emptyTodo.id === null) {
        return {
          ...state,
          todoList: [
            ...state.todoList,
            {
              ...action.payload,
              id: Math.random(),
              style: {
                left: `${Math.floor(Math.random() * 80)}%`,
                right: `${Math.floor(Math.random() * 80)}%`,
                top: `${Math.floor(Math.random() * 80)}%`,
                bottom: `${Math.floor(Math.random() * 80)}%`,
              },
            },
          ],
          emptyTodo: {
            id: null,
            title: null,
            description: null,
            checked: false,
            style: null,
          },
        };
      } else {
        return {
          ...state,
          todoList: [...newData],
          emptyTodo: {
            id: null,
            title: null,
            description: null,
            checked: false,
            style: null,
          },
        };
      }
      break;
    case CHECK_TODO:
      const checkData = state.todoList.map((item) => {
        if (Number(item.id) === Number(action.payload.id)) {
          return { ...item, checked: action.payload.checked };
        } else {
          return item;
        }
      });
      return { ...state, todoList: [...checkData] };
      break;
    case DELETE_TODO:
      const filterData = state.todoList.filter((item) => {
        return item.id !== action.payload;
      });
      return { ...state, todoList: [...filterData] };
      break;
    case EDIT_TODO:
      return { ...state, emptyTodo: { ...action.payload } };
      break;
    case CANCEL_EDIT:
      return {
        ...state,
        emptyTodo: {
          id: null,
          title: null,
          description: null,
          checked: false,
          style: null,
        },
      };
      break;
    default:
      return state;
      break;
  }
};
