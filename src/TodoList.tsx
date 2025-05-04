import { AddTask } from "@/AddTask";
import { tasksReducer } from "@/taskReducer";
import { TaskRow } from "@/TaskRow";
import { Task } from "@/types/task";
import { useReducer } from "react";

export const TodoList = ({ initialTasks }: { initialTasks: Task[] }) => {
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);

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
