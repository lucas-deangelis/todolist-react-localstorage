import { TodoList } from "@/TodoList";
import "./App.css";

const TASKS = [
  {
    title: "Mow the lawn",
    done: false,
  },
  {
    title: "Water the monstera",
    done: false,
  },
  {
    title: "Sort my music",
    done: true,
  },
  {
    title: "Scan important files",
    done: false,
  },
];

function App() {
  return <TodoList initialTasks={TASKS} />;
}

export default App;
