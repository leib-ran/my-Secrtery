import CalanderUtil from "../../../core/util/calander"


export function DaysHeader(){
    const calanderUtil = new CalanderUtil()
    const daysName= calanderUtil.getDayWeek()
    console.log("ran");
    
    return <div className ={"grid-cols-7 grid grid-rows-1 w-56 justify-center "}>
  
        {daysName.map((element,i)=>{return <div key={i} className="border border-gray-300 text-center font-bold box-border">{element}</div>})}

    </div>
}