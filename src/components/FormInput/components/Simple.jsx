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
      onKeyPress,
    } = props;

    return (
      <div className="relative">
        <input
          type="text"
          className="block w-[100%] border-[1px] border-gray-300 rounded-[.2rem] px-[.7rem] py-[.8rem] focus:border-myPurple focus:outline-none"
          placeholder={placeHolder}
          onKeyPress={onKeyPress}
          onChange={onChange}
        />
        {errLabel && (
          <ErrFormMsg errLabel={errLabel} />
        )}
        {!errLabel && (
          <OkFormMsg 
           styles=
           {
            "!top-0 !right-[.4rem]"
           }
           />
        )}
      </div>
    );
}
