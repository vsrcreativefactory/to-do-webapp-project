import React, { useState } from "react";

const AddTask = ({ addTask }) => {
  const [value, setValue] = useState("");

  const addItem = () => {
    addTask(value);
    setValue(""); //to clear field after enter a task -01
  };
  return (
    <>
      <div className="input-container">
        <input
          type="text"
          className="input-field"
          placeholder="Add a new task"
          value={value} //to clear field after enter a task -02
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
        <button onClick={addItem} className="add-btn">
          ADD
        </button>
      </div>
    </>
  );
};

export default AddTask;
