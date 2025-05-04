import { Task } from "@/types/task";

export const tasksReducer = (tasks: Task[], action: TaskReducerAction) => {
  console.log("reducing tasks", tasks, "with action", action);

  switch (action.type) {
    case "check":
      return tasks.map((t: Task) => {
        if (t.title === action.payload.title) {
          return {
            title: t.title,
            done: true,
          };
        } else {
          return t;
        }
      });
    case "uncheck":
      return tasks.map((t: Task) => {
        if (t.title === action.payload.title) {
          return {
            title: t.title,
            done: false,
          };
        } else {
          return t;
        }
      });
    case "add":
      return [action.payload.task, ...tasks];
    case "set_initial_tasks":
      return action.payload.tasks;

    default:
      return tasks;
  }
};

export type TaskReducerAction =
  | { type: "check"; payload: { title: string } }
  | { type: "uncheck"; payload: { title: string } }
  | { type: "add"; payload: { task: Task } }
  | { type: "set_initial_tasks"; payload: { tasks: Task[] } };
