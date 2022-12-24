export default function titleShorter(title,max=60)
{
  if(title===undefined)return ''
  let dots = "...";
  if (title.length > max) 
  {
    return title.substring(0, max) + dots;
  }
  return title;
}