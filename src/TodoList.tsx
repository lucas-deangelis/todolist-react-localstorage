import { AddTask } from "@/AddTask";
import { tasksReducer } from "@/taskReducer";
import { TaskRow } from "@/TaskRow";
import { Task } from "@/types/task";
import { useEffect, useReducer } from "react";

function getTasksInLocalStorage(): Task[] {
  const storedTasks = localStorage.getItem("tasks");
  if (storedTasks === null) {
    return [];
  }
  try {
    // Add basic error handling for invalid JSON
    const parsedTasks = JSON.parse(storedTasks);
    // Optional: Add validation to ensure it's an array of Task objects
    if (Array.isArray(parsedTasks)) {
      return parsedTasks;
    }
  } catch (error) {
    console.error("Failed to parse tasks from localStorage:", error);
  }
  return [];
}

export const TodoList = () => {
  const [tasks, dispatch] = useReducer(tasksReducer, []);

  useEffect(() => {
    const loadedTasks = getTasksInLocalStorage();
    dispatch({ type: "set_initial_tasks", payload: { tasks: loadedTasks } });
  }, []);

  useEffect(() => {
    if (tasks.length > 0 || localStorage.getItem("tasks") !== null) {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
  }, [tasks]);

  const rows = tasks.map((task) => (
    <TaskRow
      key={task.title}
      title={task.title}
      done={task.done}
      dispatch={dispatch}
    />
  ));

  return (
    <>
      <h1>Todo list</h1>
      <AddTask dispatch={dispatch} />
      <table>
        <thead>
          <tr>
            <th>Done</th>
            <th>Task</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    </>
  );
};
