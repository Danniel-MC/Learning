import { useTasks } from "../context/TasksProvider";

function TasksCard({ tasks }) {
  const { deleteTask } = useTasks();

  return (
    <div>
      <h2>{tasks.title}</h2>
      <p>{tasks.description}</p>
      <span>{tasks.done === 1 ? "✅" : "❌"}</span>
      <span>{tasks.createAt}</span>
      <button
        onClick={() => {
          deleteTask(tasks.id);
        }}
      >
        Delete
      </button>
      <button>Update</button>
    </div>
  );
}

export default TasksCard;
