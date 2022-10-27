import { FaTrash } from "react-icons/fa";
import { TodoLi, UlTodo } from "./styles";
import { IInputData } from "../TodoList";
import { MdCheckBoxOutlineBlank, MdCheckBox } from "react-icons/md";

interface IPropsTodo {
  listTodo: IInputData[];
  completeListTodo: (id: number) => void;
  removeListTodo: (id: number) => void;
}

const Todo = ({ listTodo, completeListTodo, removeListTodo }: IPropsTodo) => {
  return (
    <UlTodo>
      {listTodo.map((elem, index) => (
        <TodoLi key={index}>
          <div
            className={elem.isComplete ? "list_row complete" : "list_row"}
            key={index}
          >
            <div>
              <p>{elem.text}</p>
            </div>

            <div className="list_icons">
              <div onClick={() => completeListTodo(elem.id)}>
                {elem.isComplete ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
              </div>

              <FaTrash
                onClick={() => removeListTodo(elem.id)}
                className="delete-icon"
              />
            </div>
          </div>
        </TodoLi>
      ))}
    </UlTodo>
  );
};

export default Todo;
