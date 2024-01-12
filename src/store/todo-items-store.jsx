import { createContext } from "react";

export const TodoitemContext = createContext({
  todoitems: [],
  handleNewitem: () => {},
  handleRemoveitem: () => {},
});
