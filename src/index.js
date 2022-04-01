import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const DATA = [
  { action: 'Eat', completed: true, id: 'todo-0' },
  { action: 'Sleep', completed: false, id: 'todo-1' },
  { action: 'Repeat', completed: false, id: 'todo-2' },
]
const STATUS = ['all', 'active', 'completed']

ReactDOM.render(
  <React.StrictMode>
    <App tasks={DATA} status={STATUS} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
