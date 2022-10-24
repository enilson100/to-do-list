import { RiCloseCircleLine } from "react-icons/ri";
import { IInputData } from "../TodoList";

interface IPropsTodo {
  listTodo: IInputData[];
  completeListTodo: (id: number) => void;
  removeListTodo: (id: number) => void;
}

const Todo = ({ listTodo, completeListTodo, removeListTodo }: IPropsTodo) => {
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
              <RiCloseCircleLine
                onClick={() => removeListTodo(elem.id)}
                className="delete-icon"
              />
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Todo;
