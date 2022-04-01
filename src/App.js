import Todo from "./components/Todo";
import Form from "./components/Form"
import FilterButton from "./components/FilterButton";
import React, { useState } from "react";
import { nanoid } from "nanoid";

function App(props) {
  const [tasks, setTasks] = useState(props.tasks);
  let taskCount = tasks.length;

  function addTask(task) {
    const newTask = { id: "todo-" + nanoid(), action: task, completed: false };
    setTasks([...tasks, newTask]);
    taskCount = tasks.length;
  }

  function toggleTaskCompleted(id) {
    const updatedTasks = tasks.map(task => {
      if (task.id === id) {
        task.completed = !task.completed;
      }
      return task;
    })
    setTasks(updatedTasks)
  }

  function deleteTask(id) {
    const updatedTasks = tasks.filter(task => task.id !== id);
    setTasks(updatedTasks);
    taskCount = updatedTasks.length;
  }

  const taskList = tasks.map(task =>
    <Todo
      action={task.action}
      completed={task.completed}
      id={task.id}
      key={task.id}
      toggleTaskCompleted={toggleTaskCompleted}
      deleteTask={deleteTask}
    />)
  const buttonGroup = props.status.map(status =>
    <FilterButton status={status} />)

  return (
    <div className="todoApp">
      <h1>Todo App</h1>
      <Form addTask={addTask} />
      <div className="filters btn-group">
        {buttonGroup}
      </div>
      <h2 id="list-heading">
        {taskCount} tasks remaining
      </h2>
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
        {taskList}
      </ul>
    </div>
  );
}

export default App;
