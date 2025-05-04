import React from "react";
import { TaskReducerAction } from "./taskReducer";

export const TaskRow = ({
  title,
  done,
  dispatch,
}: {
  title: string;
  done: boolean;
  dispatch: React.Dispatch<TaskReducerAction>;
}) => {
  const classes = ["task"];
  if (done) {
    classes.push("task-done");
  }

  return (
    <tr>
      <td>
        <input
          type="checkbox"
          checked={done}
          onChange={(e) => {
            dispatch({
              type: e.target.checked ? "check" : "uncheck",
              payload: {
                title: title,
              },
            });
          }}
        />
      </td>
      <td className={classes.join(" ")}>{title}</td>
    </tr>
  );
};
