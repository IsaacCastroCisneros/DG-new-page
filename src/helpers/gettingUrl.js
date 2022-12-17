export default function gettingUrl(type,request)
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
  
        default: return ''
    }
}