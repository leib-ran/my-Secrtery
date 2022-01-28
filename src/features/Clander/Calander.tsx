import { useState } from "react";
import  CalanderUtil  from "../../core/util/calander"
import { Month } from "./components/Month";
import { MonthBar } from "./components/MonthBar";


export function Calander(){
    const calanderUtil = new CalanderUtil()
    const [date, setDate]= useState(calanderUtil.getDayObj())
    
    return <div className="w-1/12">
        <MonthBar dayjs={date} setDate={setDate}/>
        <Month dayjs={date}/>
    </div>
}