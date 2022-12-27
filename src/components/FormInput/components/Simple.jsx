import React from 'react'
import ErrFormMsg from './ErrFormMsg';
import OkFormMsg from './OkFormMsg';

export default function Simple(props) 
{
    const 
    {
      placeHolder,
      onChange,
      errLabel = undefined,
      inputType='text',
      okBorder=false,
      onKeyFunc,
      value
    } = props;


    return (
      <div className="relative">
        <input
          type={inputType}
          value={value}
          className={`block w-[100%] border-[1px] border-gray-300 rounded-[.2rem] px-[.7rem] py-[.8rem] focus:border-myPurple focus:outline-none ${errLabel ? '!border-red-500': '!border-green-500'}`}
          placeholder={placeHolder}
          onKeyPress={onKeyFunc}
          onChange={onChange}
        />
        {errLabel && (
          <ErrFormMsg errLabel={errLabel} />
        )}
        {!errLabel&&!okBorder&&(
          <OkFormMsg 
           styles=
           {
            '!top-0 !right-[.4rem]'
           }
           />
        )}
      </div>
    );
}

