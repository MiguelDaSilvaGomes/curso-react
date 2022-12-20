import React from "react";
import Task from "./Task";


const Tasks = ({ tasks, HandleTaskClick, handleTaskDeletion }) => {
     return (
       <>
           {tasks.map((task, key) => (
           <Task key={key} task={task} HandleTaskClick={HandleTaskClick} handleTaskDeletion={handleTaskDeletion} />
          ))}
       </>
     );
};

export default Tasks;