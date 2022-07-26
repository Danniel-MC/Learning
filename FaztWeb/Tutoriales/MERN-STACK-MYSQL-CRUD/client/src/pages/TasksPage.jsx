import { useEffect, useState } from "react";
import { getTasksRequest } from "../api/tasks.api";
import TasksCard from "../components/TasksCard";

function TasksPage() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    async function loadTasks() {
      const responde = await getTasksRequest();
      setTasks(responde.data);
    }
    loadTasks();
  }, []);

  function renderMain() {
    if (tasks.length === 0) {
      return <h2>No tasks found</h2>;
    }

    return tasks.map((tasks) => <TasksCard tasks={tasks} key={tasks.id} />);
  }

  return (
    <div>
      <h1>Tasks</h1>
      {renderMain()}
    </div>
  );
}

export default TasksPage;
