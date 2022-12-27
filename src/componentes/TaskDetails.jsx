import React from 'react';
import "./TaskDetails.css"

import Button from "./button"
import { useHistory, useParams } from 'react-router-dom';

const TaskDetails = () => {
  const params = useParams();
  const History = useHistory();


  const handleBackButtoClick = () => {
    History.goBack()
  }

  return (
    <>
    <div className='back-button-container'> 
        <Button onClick={handleBackButtoClick}>Voltar</Button>
    </div>
    <div className='task-datails-container'>
      <h2>{params.taskTitle}</h2>
      <p> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae eaque laborum esse fugiat nostrum? Amet?</p>
    </div>
    </>
  );
};
 
export default TaskDetails;