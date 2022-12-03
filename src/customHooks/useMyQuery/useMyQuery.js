import React,{useState} from 'react'
import axios from 'axios'
import {useQuery} from 'react-query'

export default function useMyQuery({type,tag='',id='',limit=''}) 
{
  const url = gettingUrl(type,tag,id,limit)

  const{data,isFetching}=useQuery(['query',url],query,
  {
    keepPreviousData:true
  })

  async function query({queryKey})
  {
    const res = await axios.get(queryKey[1]);
    return res
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
            return `${url}diplomas/${tag}?offset=0&${limit}`  
        }
        case 'cursos':
        {
            return `${url}cursos/${tag}?offset=0&${limit}`  
        }
        case 'diplomados':
        {
            return `${url}diplomados/${tag}?offset=0&${limit}`
        }
  
        default: return ''
    }
}

