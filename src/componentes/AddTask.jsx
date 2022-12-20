import React, { useState } from 'react';
import Button from './button'
import "./AddTask.css";

const AddTask = ({handleTaskAdition}) => {
    const [inputData, setInputData] = useState('')

    const handleInputChange = (e) => {
       setInputData(e.target.value);
    }
    const handleAddTaskClick = () => {
       if(inputData === ""){

          return alert('Coloque um texto')
          
         }else{
            setInputData("");
            handleTaskAdition(inputData)
          }
    };
    
    return ( 
        <div className='add-task-container'>
           <input type="text" onChange={handleInputChange} value={inputData} className='add-task-input' />
           <div className='add-task-button-container'>
           <Button onClick={handleAddTaskClick}>Adicionar</Button>
           </div>
        </div>
     );
}
 
export default AddTask;