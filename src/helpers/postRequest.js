export default async function postRequest({type,request,data} )
{
  const url = gettingUrl(type,request)

  const res = await fetch(url, {
    method: "POST",
    body: data,
  })

  const resData = await res.json()
  return resData
}

function gettingUrl(type,request)
{
    const url ='https://aula.desarrolloglobal.pe/v03/api/'

    switch(type)
    {
        case 'diploma':
        {
          return `${url}diplomas/${request}`;   
        }
        case 'curso':
        {
          return `${url}cursos/${request}` 
        }
        case 'diplomado':
        {
           return `${url}diplomados/${tag}?offset=0&${limit}`
        }
        case 'login':
        {
           return `${url}sesiones/login`
        }
        case 'validation':
        {
           return `${url}sesiones/verificar`
        }
  
        default: return ''
    }
}