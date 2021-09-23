import { useState } from "react";
function AddTodo({ handleAddTodo }) {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddTodo(title);
    setTitle("");
  };

  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="add todo ..."
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        <button onClick={handleSubmit}>Add</button>
      </form>
    </div>
  );
}

export default AddTodo;
