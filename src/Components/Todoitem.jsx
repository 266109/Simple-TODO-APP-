import { useContext } from "react";
import { MdDeleteForever } from "react-icons/md";
import { TodoitemContext } from "../store/todo-items-store";

function Todoitem({ name, date, onRemoveitem }) {
  const handleClick = () => {
    onRemoveitem(name);
  };

  const contextobj = useContext(TodoitemContext);
  const todoitems = contextobj.todoitems;

  //console.log(todoitemlist);

  return (
    <div className="container">
      <div className="row" id="Task">
        <div id="name" className="col-6 det">
          {name}
        </div>
        <div id="date" className="col-4 det">
          {date}
        </div>
        <div className="col-2">
          <button
            id="btn"
            type="button"
            className="btn btn-danger"
            onClick={handleClick}
          >
            <MdDeleteForever />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Todoitem;
