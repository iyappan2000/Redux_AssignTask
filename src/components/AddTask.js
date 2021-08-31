import React from "react";
import { GrCompliance, GrEdit, GrNotification } from "react-icons/gr";
import { deleteTask } from "../redux/Slice";

import { useDispatch } from "react-redux";
import { CloseEditTask, UpdateTask } from "../redux/Slice";
import { nanoid } from "@reduxjs/toolkit";

function AddTask(props) {
  const dispatch = useDispatch();
  const upDateHandler = () => {
    dispatch(
      UpdateTask({ title: props.title, date: props.date }),
      CloseEditTask({ setVisible: true })
    );

    // props.setVisible(true);
  };
  const deleteHandler = () => {
    dispatch(deleteTask({ id: nanoid }));
  };
  return (
    <div className="taskHead">
      <div key={props.id} className="taskNames" style={{ display: "flex" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          {" "}
          <h4>{props.title}</h4>
          <p>{props.date}</p>
        </div>
        <div
          style={{
            marginLeft: "120px",
            padding: "0px 10px",
            marginTop: "10px",
          }}
        >
          <button className="icons" onClick={upDateHandler}>
            <GrEdit />
          </button>
          <button className="icons">
            <GrNotification />
          </button>
          <button className="icons" onClick={deleteHandler}>
            <GrCompliance />
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTask;
