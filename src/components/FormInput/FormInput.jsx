import React from 'react'
import Regular from './components/Regular';
import Simple from './components/Simple';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-regular-svg-icons';

export default function FormInput(props) 
{
  const
  {
    type='regular'
  }=props

  return (
    <>
      {type === "regular" && (
         <Regular {...props}/>
      )}
      {
        type==='simple'&&
        <Simple {...props}/>
      }
    </>
  );
}

