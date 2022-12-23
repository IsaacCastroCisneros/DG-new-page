import React from 'react'

export default function ErrFormMsg({errLabel}) {
  return (
    <span className="absolute border-[1px] border-[#fff] text-[#fff] bottom-0 bg-red-500 px-[.5rem] rounded-[.5rem] text-[.9rem] translate-y-[50%] right-0 block whitespace-nowrap">
    {errLabel}
  </span>
  )
}
