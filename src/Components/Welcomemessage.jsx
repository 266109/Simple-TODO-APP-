import { useContext } from "react";
import { TodoitemContext } from "../store/todo-items-store";

const WelcomeMessage = () => {
  const contextobj = useContext(TodoitemContext);
  const todoitems = contextobj.todoitems;
  return (
    todoitems.length === 0 && (
      <>
        <center>
          <h1> Sit Back Relax ,No Work To DO</h1>
        </center>
      </>
    )
  );
};

export default WelcomeMessage;
