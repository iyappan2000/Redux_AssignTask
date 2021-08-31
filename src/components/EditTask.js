import React from "react";
import "antd/dist/antd.css";
import { Button, Select } from "antd";
import { DatePicker, Space } from "antd";
import { TimePicker } from "antd";
import moment from "moment";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/Slice";

const format = "HH:mm";
const { Option } = Select;

function EditTask(props) {
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    props.setEditVisible(false);
    dispatch(addTask({ title: props.taskName, date: props.Dates }));
  };

  return (
    <form className="createLists">
      <div className="taskDescription">
        <label>Task Description</label>
        <br />
        <Select
          defaultValue="lucy"
          className="taskInput"
          value={props.taskName}
          style={{ width: 340, borderRadius: "10px" }}
          onChange={props.taskChange}
        >
          <Option value="jack">Jack</Option>
          <Option value="lucy">Lucy</Option>
          <Option value="Yiminghe">yiminghe</Option>
        </Select>
      </div>
      <div style={{ display: "flex", paddingLeft: "10px" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            paddingRight: "40px",
          }}
        >
          <label class="flex flex-col ...">Date</label>
          <Space direction="vertical">
            <DatePicker onChange={props.onChange} />
          </Space>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <label>Time</label>
          <TimePicker defaultValue={moment("12:08", format)} format={format} />
        </div>
      </div>
      <div className="taskDescription">
        <label>Assign User</label>
        <br />
        <Select
          defaultValue="lucy"
          className="taskInput"
          style={{ width: 340, borderRadius: "10px" }}
          value={props.userName}
          onChange={props.userChange}
        >
          <Option value="jack">Jack</Option>
          <Option value="lucy">Lucy</Option>
          <Option value="Yiminghe">yiminghe</Option>
        </Select>
      </div>
      <div style={{ paddingLeft: "190px", paddingTop: "20px" }}>
        <Button
          style={{
            borderRadius: "5px",
            color: "black",
          }}
          onClick={() => props.setVisible(false)}
        >
          cancel
        </Button>
        <Button
          className="btn"
          style={{
            marginLeft: "20px",
            borderRadius: "5px",
            background: "lightgreen",
            color: "white",
          }}
          type="submit"
          onClick={submitHandler}
        >
          save
        </Button>
      </div>
    </form>
  );
}

export default EditTask;
