import React, { useEffect, useRef, useState } from "react";
import { GrAdd } from "react-icons/gr";
import CreateTask from "./CreateTask";
import "./Header.css";
function Header() {
  const [visible, setVisible] = useState(false);
  let menuRef = useRef();
  useEffect(() => {
    let handler = (event) => {
      if (!menuRef.current.contains(event.target)) {
        setVisible(false);
      }
    };
    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });
  return (
    <div className="header">
      <div className="headerFiles" ref={menuRef}>
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
    </div>
  );
}

export default Header;
