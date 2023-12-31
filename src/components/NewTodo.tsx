import React, { useRef } from "react";

import "./NewTodo.css";
// could also be an interface (and probably should be in order to maintain convention)
type NewTodoProps = {
  onAddTodo: (todoText: string) => void;
};

const NewTodo: React.FC<NewTodoProps> = (props) => {
  const textInputRef = useRef<HTMLInputElement>(null); //telling TS that the ref is linked to an input and that it will initially be null

  const todoSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = textInputRef.current!.value; //telling TS that when this function fires there will for sure be a value
    if (!enteredText) {
      alert("Please enter a Todo!");
      return;
    }
    props.onAddTodo(enteredText); //will now only accept a string based on the type on line 4 (in compilation at least, not protected at runtime)

    if (textInputRef.current) {
      //resets the form if it has content
      textInputRef.current.value = "";
    }
  };

  return (
    <form onSubmit={todoSubmitHandler}>
      <div className="form-control">
        <label htmlFor="todo-text">Todo Text</label>
        {/* //linking the input element to the ref defined above */}
        <input type="text" id="todo-text" ref={textInputRef}></input>
      </div>
      <button type="submit">ADD TODO</button>
    </form>
  );
};

export default NewTodo;
