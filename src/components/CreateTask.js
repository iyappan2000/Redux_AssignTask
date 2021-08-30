import React from "react";
import "antd/dist/antd.css";
import { Button, Select } from "antd";
import { DatePicker, Space } from "antd";
import { TimePicker } from "antd";
import moment from "moment";

const format = "HH:mm";
const { Option } = Select;

function CreateTask(props) {
  function handleChange(value) {
    console.log(`selected ${value}`);
  }
  function onChange(date, dateString) {
    console.log(date, dateString);
  }
  return (
    <form className="createLists">
      <div className="taskDescription">
        <label>Task Description</label>
        <br />
        <Select
          defaultValue="lucy"
          className="taskInput"
          style={{ width: 340, borderRadius: "10px" }}
          onChange={handleChange}
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
            <DatePicker onChange={onChange} />
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
          onChange={handleChange}
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
          onClick={() => props.setVisible(false)}
        >
          save
        </Button>
      </div>
    </form>
  );
}

export default CreateTask;
