import Todo from "./components/Todo";
import Form from "./components/Form"
import FilterButton from "./components/FilterButton";
import React, { useState } from "react";
import { nanoid } from "nanoid";


const FILTER_MAP = {
  All: () => true,
  Active: task => !task.completed,
  Completed: task => task.completed
}
const FILTER_STATUS = Object.keys(FILTER_MAP);

function App(props) {
  const [tasks, setTasks] = useState(props.tasks);
  const [filter, setFilter] = useState("All");
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

  function editTask(id, newName) {
    const updatedTasks = tasks.map(task => {
      if (task.id === id) {
        task.action = newName;
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

  const taskList = tasks.filter(FILTER_MAP[filter]).map(task =>
    <Todo
      action={task.action}
      completed={task.completed}
      id={task.id}
      key={task.id}
      toggleTaskCompleted={toggleTaskCompleted}
      deleteTask={deleteTask}
      editTask={editTask}
    />)

  const filterList = FILTER_STATUS.map(status =>
    <FilterButton
      key={status}
      status={status}
      is_pressed={status === filter}
      setFilter={setFilter}
    />)

  return (
    <div className="todoApp">
      <h1>Todo App</h1>
      <Form addTask={addTask} />
      <div className="filters btn-group">
        {filterList}
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
