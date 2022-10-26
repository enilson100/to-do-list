import ToDoForm from "../TodoForm";
import Todo from "../Todo";
import { useState } from "react";
import { DivList } from "./styles";

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
  const removeList = (id: number) => {
    const removedArr = list.filter((todo) => todo.id !== id);

    setList(removedArr);
  };

  return (
    <DivList>
      <div className="div__todo-list">
        <h1>What's the Plan for Today?</h1>
        <ToDoForm onSubmit={addTodo} />
        <Todo
          listTodo={list}
          completeListTodo={completeList}
          removeListTodo={removeList}
        />
      </div>
    </DivList>
  );
};
export default TodoList;
