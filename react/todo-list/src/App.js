import './App.css';
import {useState} from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';


function App() {
  const [tasks, setTasks] = useState([]);

  return (
    <div className="App">
      <h1>Todo List App</h1>
      <TaskForm tasks={tasks} setTasks={setTasks}/>
      <TaskList tasks={tasks} setTasks={setTasks}/>
    </div>
  );

}

export default App;
