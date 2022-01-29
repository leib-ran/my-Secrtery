export function DaysHeader(){
    const daysName= ['Sun','M','Tu','W','Th','F','Sat']
    return <div className ={"grid-cols-7 grid grid-rows-1 w-48 justify-center "}>
  
        {daysName.map((element)=>{return <div className="border border-gray-300 text-center font-bold box-border">{element}</div>})}


    </div>
}