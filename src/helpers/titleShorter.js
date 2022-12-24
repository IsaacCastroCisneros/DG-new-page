export default function titleShorter(title)
{
  if(title===undefined)return ''
  let dots = "...";
  if (title.length > 60) 
  {
    return title.substring(0, 60) + dots;
  }
  return title;
}