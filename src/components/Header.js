import React, { useState } from "react";
import { GrAdd } from "react-icons/gr";
import AddTask from "./AddTask";
import CreateTask from "./CreateTask";
import "./Header.css";
function Header() {
  const [visible, setVisible] = useState(false);
  const tasks = [
    {
      id: 1,
      taskName: "Follow Up",
      date: "14/02/2021",
    },
  ];
  return (
    <div className="header">
      <div className="headerFiles">
        <span>TASKS 0</span>
        <div className="addIcon">
          <button
            style={{ cursor: "pointer" }}
            onClick={() => setVisible(true)}
          >
            <GrAdd />
          </button>
        </div>
      </div>

      {visible && (
        <div className="createForm">
          {" "}
          <CreateTask setVisible={setVisible} />
        </div>
      )}
      {!visible && (
        <ul className="addLists">
          {tasks.map((task) => {
            return (
              <AddTask id={task.id} title={task.taskName} date={task.date} />
            );
          })}
        </ul>
      )}
    </div>
  );
}

export default Header;
