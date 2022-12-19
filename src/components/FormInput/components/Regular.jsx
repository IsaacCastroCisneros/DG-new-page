import React from 'react'
import ErrFormMsg from './ErrFormMsg';
import OkFormMsg from './OkFormMsg';

export default function Regular(props) 
{
    const 
    {
      placeHolder,
      icon,
      onChange,
      errLabel = undefined,
      onKeyPress,
    } = props;

  return (
    <div className="flex relative h-[45px] items-center gap-[1rem] bg-[#fff] px-[1rem] rounded-[.5rem] min-w-[280px] heroProduct:min-w-0">
      <div className="w-[17px]">
        <img src={icon} className="w-[100%]" />
      </div>
      <div className="flex-1">
        <input
          type="text"
          placeholder={placeHolder}
          className="outline-none block text-myBlack placeholder:text-placeHolder placeholder:font-medium placeholder:text-[.8rem] w-[100%]"
          onKeyPress={onKeyPress}
          onChange={onChange}
        />
      </div>
      {errLabel && (
       <ErrFormMsg errLabel={errLabel}/>
      )}
      {!errLabel && (
        <OkFormMsg/>
      )}
    </div>
  );
}
