import React from "react";

function AddTask(props) {
  return (
    <div className="taskHead">
      <div key={props.id} className="taskNames">
        <h4>{props.title}</h4>
        <p>{props.date}</p>
      </div>
    </div>
  );
}

export default AddTask;
