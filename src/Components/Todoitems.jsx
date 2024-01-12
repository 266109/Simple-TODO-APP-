import { useContext } from "react";
import Todoitem from "./Todoitem";
import { TodoitemContext } from "../store/todo-items-store";

function Todoitems({}) {
  //let { items } = props;

  const contextobj = useContext(TodoitemContext);
  const todoitems = contextobj.todoitems;
  const onRemoveitem = contextobj.handleRemoveitem;

  return (
    <>
      {todoitems.map((item) => (
        <Todoitem
          key={item.name}
          name={item.name}
          date={item.duedate}
          onRemoveitem={onRemoveitem}
        />
      ))}
    </>
  );
}

export default Todoitems;
