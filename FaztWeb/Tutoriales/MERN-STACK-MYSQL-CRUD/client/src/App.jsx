import { Routes, Route } from "react-router-dom";

import TasksPage from "./pages/TasksPage";
import TasksForm from "./pages/TasksForm";
import NotFound from "./pages/NotFound";
import { TasksContextProvider } from "./context/TasksProvider";

import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <TasksContextProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<TasksPage />} />
          <Route path="/new" element={<TasksForm />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </TasksContextProvider>
    </>
  );
}

export default App;
