import { deleteTaskRequest } from "../api/tasks.api";

function TasksCard({ tasks }) {
  const handleDelete = async (id) => {
    try {
      const response = await deleteTaskRequest(id);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>{tasks.title}</h2>
      <p>{tasks.description}</p>
      <span>{tasks.done === 1 ? "✅" : "❌"}</span>
      <span>{tasks.createAt}</span>
      <button
        onClick={() => {
          handleDelete(tasks.id);
        }}
      >
        Delete
      </button>
      <button>Update</button>
    </div>
  );
}

export default TasksCard;
