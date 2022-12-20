import React, { useState } from "react";
import {BrowserRouter as Router, Route} from 'react-router-dom'

import Header from "./componentes/header"
import Tasks from "./componentes/Tasks";
import AddTask from './componentes/AddTask';

//import TaskDetails from "./componentes/TaskDetails";
import "./app.css";

const App = () => {
   //let message = "Hello Word!";
   const [tasks, setTasks] = useState([
    {
        id: "1",
        title: "Estudar Para o Cefet",
        completed: false,
    },
    {
        id: "2",
        title: "Ler um Livro",
        completed: true,
    }
   ])
   const HandleTaskClick = (TaskId) => {
    const newTask = tasks.map(task => {
       if(task.id === TaskId )return{...task, completed: !task.completed}

       return task
    })
       setTasks(newTask)
    };
    const handleTaskAdition = (taskTitle) => {
        const newTask = [
            ...tasks,
        {
          title: taskTitle,
          id: Math.random(10),
          completed: false,
        },
    ];
    setTasks(newTask);
};
    const handleTaskDeletion = (TaskId) =>{
        const newTask = tasks.filter(task => task.id !== TaskId)
        setTasks(newTask)
    }

   return (
        <Router>
            <div className='containder'>
                    <Header />
                         <Route path="/" exact render={() => (
                            <>
                               <AddTask 
                               handleTaskAdition={handleTaskAdition}
                               />
                               <Tasks 
                               tasks={tasks} 
                               HandleTaskClick={HandleTaskClick} 
                               handleTaskDeletion={handleTaskDeletion}   
                          />
                            </>
                         )}/>
                </div> 
        </Router>
    );

} ;

export default App;
