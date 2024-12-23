import React, { useEffect, useState } from "react";
import "./Todo.css";
import ListTasks from "./ListTasks";
import AddTask from "./AddTask";

const Todo = () => {
  const [tasks, setTasks] = useState([]);
  useEffect(()=> {
    document.title = `You've ${tasks.length} pending task(s)`
  })

  const addTask = (title) => {
    const newTask = [...tasks, { title }];
    setTasks(newTask);
  };

  const removeTask = (index) => {
    const newTask = [...tasks];
    newTask.splice(index, 1);
    setTasks(newTask);
  };

  return (
    <>
      <br />
      <h1 className="bg-secondary text-white">TO-DO App</h1>
      <div className="todo-container">
        <div className="header">TO-DO</div>
        <div className="add-task">
          <AddTask addTask={addTask} />
        </div>
        <div className="tasks">
          {tasks.map((task, index) => (
            <ListTasks
              task={task}
              removeTask={removeTask}
              index={index}
              key={index}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Todo;
