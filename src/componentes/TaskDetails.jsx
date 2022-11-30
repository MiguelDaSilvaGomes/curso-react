import React from 'react';

import Button from "./button"
import { useParams } from 'react-router-dom';

const taskDetails = () => {
  const params = useParams();
  console.log(params)

  return (
    <>
    <div className='back-button-container'> 
        <Button>Voltar</Button>
    </div>
    <div className='task-datails-container'>
      <h2>{params.taskTitle}</h2>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem fuga velit odit possimus tenetur rerum dignissimos est neque alias iure provident architecto, nesciunt tempore unde blanditiis accusantium placeat voluptate aperiam.</p>
    </div>
    </>
  );
};
 
export default taskDetails;