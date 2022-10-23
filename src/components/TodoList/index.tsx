import ToDoForm from "../TodoForm";
import Todo from "../Todo";
import { useState } from "react";

export interface IInputData {
  id: number;
  text?: string;
  isComplete?: boolean;
}

const TodoList = () => {
  const [list, setList] = useState<IInputData[]>([]);

  const addTodo = (todo: IInputData) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

    setList([todo, ...list]);
  };

  const completeList = (id: number) => {
    let updatedList = list.map((elem) => {
      if (elem.id === id) {
        elem.isComplete = !elem.isComplete;
      }
      return elem;
    });
    setList(updatedList);
  };

  return (
    <div>
      <h1>What's the Plan for Today?</h1>
      <ToDoForm onSubmit={addTodo} />
      <Todo listTodo={list} completeListTodo={completeList} />
    </div>
  );
};
export default TodoList;
