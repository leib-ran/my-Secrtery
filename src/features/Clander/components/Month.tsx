import { useEffect, useState } from "react"
import { DateInterface } from "../../../interfaces/DateInterface"
import React from "react"
import { Day } from "./Day"
import CalanderUtil from "../../../core/util/calander"
import dayjs from "dayjs"

export function Month(props:DateInterface){
    const calnderUtil = new CalanderUtil()
    const monthMatrice = calnderUtil.getMonthMatrix(props.dayjs)
    
    const [monthMat ,setMonth]  = useState(monthMatrice)

    useEffect(()=>{
         const calnderUtil = new CalanderUtil()
         const monthMatrice = calnderUtil.getMonthMatrix(props.dayjs)
         setMonth(monthMatrice)
    },
    [props.dayjs])

    return <div className="grid grid-cols-7 grid-rows-5 h-2/3 w-56">

        {monthMat.map((row,i)=>{return <React.Fragment key={i}>
                {row.map((day:any,idx:number)=> {
                    return <React.Fragment key={idx}>
                        <Day dayjs = {day} currentMonth={props.currentMonth}/>
                    </React.Fragment>
                } )}
    </React.Fragment>
        
        })}
    </div>
    
}
