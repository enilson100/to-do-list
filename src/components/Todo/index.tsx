import { useState } from "react";
import ToDoForm from "../TodoForm";
import { RiCloseCircleLine } from "react-icons/ri";
import { IInputData } from "../TodoList";
import { TiEdit } from "react-icons/ti";

interface IPropsTodo {
  listTodo: IInputData[];
  completeListTodo: (id: number) => void;
}

const Todo = ({ listTodo, completeListTodo }: IPropsTodo) => {
  const [edit, setEdit] = useState({ id: null, value: "" });

  return (
    <ul>
      {listTodo.map((elem, index) => (
        <li key={index}>
          <div
            className={elem.isComplete ? "list_row complete" : "list_row"}
            key={index}
          >
            <div key={elem.id} onClick={() => completeListTodo(elem.id)}>
              <p>{elem.text}</p>
            </div>
            <div className="list_icons">
              <RiCloseCircleLine />
              <TiEdit />
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Todo;
