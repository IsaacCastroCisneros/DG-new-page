export function formCleaner(prev)
{
    const myPrev = Object.keys(prev)
    const myObject = {}
    myPrev.forEach(prop=>
    {
        myObject[prop]=''
    })
    return myObject;
}
