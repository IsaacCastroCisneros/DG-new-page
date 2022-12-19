import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-regular-svg-icons';

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
        <span className="absolute bottom-0 bg-red-500 px-[.5rem] rounded-[.5rem] text-[.9rem] translate-y-[50%] right-0 block whitespace-nowrap">
          {errLabel}
        </span>
      )}
      {!errLabel && (
        <span className="absolute right-0 text-green-500 text-[2rem] translate-x-[120%]">
          <FontAwesomeIcon icon={faCheckCircle} />
        </span>
      )}
    </div>
  );
}
