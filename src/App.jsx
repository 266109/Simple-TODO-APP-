import { useReducer, useState } from "react";
import "./App.css";
import Addtodo from "./Components/AddTodo";
import Appname from "./Components/Appname";

import Todoitems from "./Components/Todoitems";
import WelcomeMessage from "./Components/Welcomemessage";
import { TodoitemContext } from "./store/todo-items-store";

const TodoReducer = (curstate, action) => {
  let newarr = curstate;
  if (action.type === "New_Item") {
    newarr = [
      ...curstate,
      { name: action.payload.itemname, duedate: action.payload.itemdate },
    ];
  } else if (action.type === "Remove_Item") {
    newarr = curstate.filter((item) => item.name != action.payload.itemname);
  }

  return newarr;
};

function App() {
  /*const [todoitems, settodoitems] = useState([
    {
      name: "Buy Range Rover",
      duedate: "2028-05-20",
    },
  ]);*/

  const [todoitems, dispatchtodoitem] = useReducer(TodoReducer, [
    {
      name: "Buy Range Rover",
      duedate: "2028-05-20",
    },
  ]);

  const handleNewitem = (itemname, itemdate) => {
    console.log(`${itemname} and ${itemdate}`);

    const newItemaction = {
      type: "New_Item",
      payload: {
        itemname,
        itemdate,
      },
    };

    dispatchtodoitem(newItemaction);

    /*const newitem = { name: itemname, duedate: itemdate };
    const newarr = [...todoitems, newitem];
    settodoitems(newarr);*/
    /*settodoitems((currValue) => [
      ...currValue,
      { name: itemname, duedate: itemdate },
    ]);*/
  };

  const handleRemoveitem = (itemname) => {
    console.log("Remove task clicked " + itemname);

    const Removeitemaction = {
      type: "Remove_Item",
      payload: {
        itemname,
      },
    };

    dispatchtodoitem(Removeitemaction);

    //todoitems.splice(todoitems.length, 1);
    /*const newar = todoitems.filter((item) => item.name != itemname);
    settodoitems(newar);*/
  };

  return (
    <TodoitemContext.Provider
      value={{
        todoitems: todoitems,
        handleNewitem: handleNewitem,
        handleRemoveitem: handleRemoveitem,
      }}
    >
      <div>
        <Appname />
        <WelcomeMessage />
        <Addtodo />
        <Todoitems />
      </div>
    </TodoitemContext.Provider>
  );
}

export default App;
