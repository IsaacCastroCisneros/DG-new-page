import React from 'react'
import Regular from './components/Regular';
import Simple from './components/Simple';

export default function FormInput(props) 
{
  const { type = "regular", onlyNum, onlyText,onKeyPress } = props;

  let onKeyFunc = ()=>null

  if(onKeyPress) onKeyFunc=onKeyPress
  if(onlyNum) onKeyFunc=onlyNumFunc
  if(onlyText) onKeyFunc=onlyTextFunc

  return (
    <>
      {type === "regular" && (
         <Regular {...props} onKeyFunc={onKeyFunc} />
      )}
      {
        type==='simple'&&
        <Simple {...props} onKeyFunc={onKeyFunc} />
      }
    </>
  );
}

function onlyNumFunc(e)
{
  if (e.code.length === 7||e.code.includes('Digit')) return;
  e.preventDefault();
}

function onlyTextFunc(e)
{
  if (e.code.includes("Key")) return;
  e.preventDefault();
}



