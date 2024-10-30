import { useReducer, useState } from "react";
import Indiv from "./Indiv";

export const ACTIONS = {
  ADD_TODO: "add-todo",
  TOGGLE_TODO: "toggle-todo",
  DELETE_TODO: "del-todo",
};

const reducer = (todos, action) => {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return [...todos, newTodo(action.payload.name)];
    case ACTIONS.TOGGLE_TODO:
      return todos.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, complete: !todo.complete }
          : todo
      );
    case ACTIONS.DELETE_TODO:
      return todos.filter((todo) => todo.id !== action.payload.id);

    default:
      return todos;
  }
};

const newTodo = (name) => {
  return { id: Date.now(), name, complete: false };
};

const initialState = [];

function Todo() {
  const [todos, dispatch] = useReducer(reducer, initialState);
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: ACTIONS.ADD_TODO, payload: { name } });
    setName("");
  };

  return (
    <>
      <h2>Below is a basic TODO</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Type your todo..."
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </form>
      <br />
      {todos.map((todo) => (
        <Indiv key={todo.id} todo={todo} dispatch={dispatch} />
      ))}
    </>
  );
}

export default Todo;
