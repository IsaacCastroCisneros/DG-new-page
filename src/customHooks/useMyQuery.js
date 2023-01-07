import React,{useState} from 'react'
import axios from 'axios'
import {useQuery} from 'react-query'

export default function useMyQuery({type,tag='',id='',limit=''}) 
{
  if(type==='')return {data:''}
  const url = gettingUrl(type,tag,id,limit)

  let{data,isFetching}=useQuery(['query',url],query,
  {
    keepPreviousData:true
  })

  async function query({queryKey})
  {
    const res = await axios.get(queryKey[1]);
    return res
  }

  if(tag===''&&type!=='popUps')
  {
    if(data!==undefined)
    {
      const {grabado}=data.data
  
      return {data:grabado,isFetching}
    }
  }

  return {data:data?.data,isFetching}
}


function gettingUrl(type,tag,id,limit)
{
    const url ='https://aula.desarrolloglobal.pe/v03/api/'

    switch(type)
    {
        case 'diplomas':
        {
            return `${url}diplomas/grabado/${tag}?offset=0&${limit}`  
        }
        case 'cursos':
        {
            return `${url}cursos/grabado/${tag}?offset=0&${limit}`  
        }
        case 'geo':
        {
            return 'https://ipgeolocation.abstractapi.com/v1/?api_key=5439d75ced19410c865a3d67a41f04d6'
        }
        case 'diplomados':
        {
            return `${url}diplomados/grabado/${tag}?offset=0&${limit}`
        }
        case 'popUps':
        {
            return `https://aula.desarrolloglobal.pe/v03/api/modal/grabado`
        }
  
        default: return ''
    }
}

