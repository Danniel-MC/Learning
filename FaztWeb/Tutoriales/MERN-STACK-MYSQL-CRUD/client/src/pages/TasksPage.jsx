import { useEffect } from "react";
import TasksCard from "../components/TasksCard";
import { useTasks } from "../context/TasksProvider";

function TasksPage() {
  const { tasks, loadTasks } = useTasks();

  useEffect(() => {
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
