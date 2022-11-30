import React from 'react';
import './Button.css';

const button = ({ children, onClick }) => {
    return ( 
        <button  onClick={onClick} className='button'>
            {children}
        </button>
     );
}
 
export default button;