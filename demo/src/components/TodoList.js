import { useEffect, useState } from "react";
import axios from "axios";

import Todo from "./Todo";
import AddTodo from "./AddTodo";

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [update, setUpdate] = useState(false);

  const handleCompleted = async (id) => {
    const updatedTodo = {
      ...todos.find((todo) => todo.id === id),
      completed: true,
    };

    await axios.put(`http://localhost:1337/todos/${id}`, updatedTodo);
    setUpdate(true);
  };

  const handleAddTodo = async (title) => {
    const todo = { title, completed: false };
    await axios.post("http://localhost:1337/todos", todo);
    setUpdate(true);
  };

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:1337/todos/${id}`);
    setUpdate(true);
  };

  const getTodos = async () => {
    const data = await axios.get("http://localhost:1337/todos");
    setTodos(data.data);
    setUpdate(false);
  };

  useEffect(() => {
    getTodos();
  }, [update]);

  return (
    <div>
      <AddTodo handleAddTodo={handleAddTodo} />
      {todos.length > 0
        ? todos.map((todo) => (
            <Todo
              key={todo.id}
              todo={todo}
              handleCompleted={handleCompleted}
              handleDelete={handleDelete}
            />
          ))
        : null}
    </div>
  );
}

export default TodoList;
