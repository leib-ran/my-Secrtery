import { useState } from "react"
import { MonthInterface } from "../../../interfaces/MonthInterface"
import React from "react"
import { Day } from "./Day"

export function Month(props:MonthInterface){
    const [month,setMonth]  = useState(props.month)

    return <div className="grid grid-cols-7 grid-rows-5 h-2/3 w-48">

        {month.map((row,i)=>{return <React.Fragment key={i}>
                {row.map((day:any,idx:number)=> {
                    return <React.Fragment key={idx}>
                        <Day day = {day}/>
                    </React.Fragment>

                } )}
    </React.Fragment>
        
        })}


    </div>

}