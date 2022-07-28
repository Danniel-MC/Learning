import { useContext, createContext, useState } from "react";
import { getTasksRequest, deleteTaskRequest } from "../api/tasks.api";
import { TasksContext } from "./TasksContext";

export const useTasks = () => {
  const context = useContext(TasksContext);
  if (!context) {
    throw new Error("useTasks must be used within a TasksContextProvider");
  }
  return context;
};

export const TasksContextProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  async function loadTasks() {
    const responde = await getTasksRequest();
    setTasks(responde.data);
  }
  const deleteTask = async (id) => {
    try {
      const response = await deleteTaskRequest(id);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <TasksContext.Provider value={{ tasks, loadTasks, deleteTask }}>
      {children}
    </TasksContext.Provider>
  );
};
