import { useEffect, useState } from "react";
import  CalanderUtil  from "../../core/util/calander"
import { DaysHeader } from "./components/DaysHeader";
import { Month } from "./components/Month";
import { MonthBar } from "./components/MonthBar";


export function Calander(){
    const calanderUtil = new CalanderUtil()
    const [date, setDate]= useState(calanderUtil.getDayObj())
    const [currentMonth,setCurrentMonth] = useState(date.month())
    console.log(currentMonth);

    useEffect(()=>{        
        setCurrentMonth(date.month()) 
    },[date])
    
    return <div className="w-1/12">
        <MonthBar dayjs={date} setDate={setDate} />
        <DaysHeader/>
        <Month dayjs={date} currentMonth = {currentMonth}/>
    </div>
}