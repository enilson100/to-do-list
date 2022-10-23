import ToDoForm from "../TodoForm";
import { useState } from "react";

export interface IInputData {
  id: number;
  text?: string;
}

const TodoList = () => {
  const [list, setList] = useState<IInputData[]>([]);

  const addTodo = (todo: IInputData) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

    setList([todo, ...list]);
  };

  return (
    <div>
      <h1>What's the Plan for Today?</h1>
      <ToDoForm onSubmit={addTodo} />
    </div>
  );
};
export default TodoList;
