import React from 'react';
import { useHistory } from 'react-router-dom';
import './Task.css'
 
const Task = ({task, HandleTaskClick, handleTaskDeletion}) => {
    const History = useHistory()

    const HandleTaskDetailsClick = () => {
        History.push(`/${task.title}`);
    };

    return <div className='task-container' style={task.completed ? {borderLeft: "6px solid chartreuse"} : {}}>
        <div className='task-title' onClick={() => HandleTaskClick(task.id)}>
        {task.title}
        </div>

        <div className='button-container'>
            <button className='remove-task-button' onClick={() => handleTaskDeletion(task.id)}>X</button>
            <button className='see-task-details-button' onClick={HandleTaskDetailsClick}>ⓘ</button>
        </div>  
    </div>

}
 
export default Task;