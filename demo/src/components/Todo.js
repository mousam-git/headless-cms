import { IoCheckmarkDoneCircle } from "react-icons/io5";
import { TiDelete } from "react-icons/ti";

function Todo({
  todo: { id, title, completed },
  handleCompleted,
  handleDelete,
}) {
  return (
    <div className="todo-card">
      {completed ? (
        <p className="todo completed">{title}</p>
      ) : (
        <p className="todo">{title}</p>
      )}
      {completed ? (
        <button>
          <TiDelete color="red" onClick={() => handleDelete(id)} />
        </button>
      ) : (
        <button onClick={() => handleCompleted(id)}>
          <IoCheckmarkDoneCircle />
        </button>
      )}
    </div>
  );
}

export default Todo;
