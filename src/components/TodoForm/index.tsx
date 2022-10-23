import { FormEvent, useState } from "react";
import { IInputData } from "../TodoList";

interface IPropsToDoForm {
  onSubmit: (todo: IInputData) => void;
}

const ToDoForm = ({ onSubmit }: IPropsToDoForm) => {
  const [input, setInput] = useState<string>("");

  const handleSubmit = (e: FormEvent<EventTarget>) => {
    e.preventDefault();

    const data = {
      id: Math.floor(Math.random() * 10000),
      text: input,
    };

    onSubmit(data);

    setInput("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        className="input_todo-form"
        type="text"
        placeholder="Add a todo"
        value={input}
        name="text"
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit" className="button_todo-form">
        Add
      </button>
    </form>
  );
};
export default ToDoForm;
