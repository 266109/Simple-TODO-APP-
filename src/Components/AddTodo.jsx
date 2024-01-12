import { useContext, useRef } from "react";
import { MdPostAdd } from "react-icons/md";
import { TodoitemContext } from "../store/todo-items-store";

function Addtodo({}) {
  const contextobj = useContext(TodoitemContext);
  const todoitems = contextobj.todoitems;

  const todonameelement = useRef();
  const tododateelement = useRef();
  const onNewitem = contextobj.handleNewitem;

  const handleClick = (event) => {
    event.preventDefault();
    const todoname = todonameelement.current.value;
    const tododate = tododateelement.current.value;
    onNewitem(todoname, tododate);
    tododateelement.current.value = "";
    todonameelement.current.value = "";
  };

  //const todoname = "xyz";M
  return (
    <div className="container text-center">
      <form className="row" onSubmit={handleClick}>
        <div className="col-6">
          <input
            type="text"
            ref={todonameelement}
            name="Input"
            placeholder="Enter Your TODO here"
          />
        </div>
        <div className="col-4">
          <input type="date" ref={tododateelement} name="Date" />
        </div>
        <div className="col-2">
          <button id="btn" type="submit" className="btn btn-success">
            <MdPostAdd />
          </button>
        </div>
      </form>
    </div>
  );
}

export default Addtodo;
