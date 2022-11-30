import React from 'react';
import './Task.css'


const Task = ({task, HandleTaskClick, handleTaskDeletion}) => {
    return <div className='task-container' style={task.completed ? {borderLeft: "6px solid chartreuse"} : {}}>
        <div className='task-title' onClick={() => HandleTaskClick(task.id)}>
        {task.title}
        </div>

        <div className='button-container'>
            <button className='remove-task-button' onClick={() => handleTaskDeletion(task.id)}>X</button>
            <button className='remove-task-button'>ⓘ</button>
        </div>  
    </div>

}
 
export default Task;