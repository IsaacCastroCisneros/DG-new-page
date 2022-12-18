import React, { useEffect, useState } from 'react'

export default function useMyErrList(formData,validations) 
{
  const[errList,setErrList]=useState()

  useEffect(()=>
  {
    const errors={}

    const{error}=validations.validate(formData,{abortEarly:false});

    if(!error)return setErrList('ok')

    error.details.forEach(err=>
        {
            errors[err.context.key]=err.message
        })

    setErrList(errors)
  },[formData])

  return [errList]
}
