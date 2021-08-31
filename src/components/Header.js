import React, { useState } from "react";
import { GrAdd } from "react-icons/gr";
import AddTask from "./AddTask";
import CreateTask from "./CreateTask";
import { useSelector } from "react-redux";
import "./Header.css";
function Header() {
  const [visible, setVisible] = useState(false);
  const tasks = useSelector((state) => state.tasks);
  const [taskName, setTaskName] = useState();
  const [userName, setUserName] = useState();
  const [Dates, setDate] = useState();

  function taskChange(value) {
    setTaskName(value);
  }
  function userChange(value) {
    console.log(value);
    setUserName(value);
  }
  function onChange(date, dateString) {
    console.log(date, dateString);
    setDate(dateString);
  }
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
          <CreateTask
            setVisible={setVisible}
            taskName={taskName}
            userName={userName}
            Dates={Dates}
            onChange={onChange}
            userChange={userChange}
            taskChange={taskChange}
          />
        </div>
      )}
      {!visible && (
        <ul className="addLists">
          {tasks.map((task) => {
            return (
              <AddTask
                id={task.id}
                title={task.title}
                date={task.date}
                taskName={taskName}
                Dates={Dates}
                setVisible={setVisible}
              />
            );
          })}
        </ul>
      )}
    </div>
  );
}

export default Header;
