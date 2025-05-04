import { TaskReducerAction } from "@/taskReducer";
import { useState } from "react";

export const AddTask = ({
  dispatch,
}: {
  dispatch: React.Dispatch<TaskReducerAction>;
}) => {
  const [taskTitle, setTaskTitle] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (taskTitle.trim() === "") return;
    dispatch({
      type: "add",
      payload: {
        task: {
          title: taskTitle,
          done: false,
        },
      },
    });
    setTaskTitle("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="New task"
        value={taskTitle}
        onChange={(e) => {
          setTaskTitle(e.target.value);
        }}
      />
      <button type="submit">Add</button>
    </form>
  );
};
