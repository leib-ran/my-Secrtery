import {DateInterface} from "../../../interfaces/DateInterface"
import CalanderUtil from "../../../core/util/calander"
import React from 'react'

export function MonthBar(props:DateInterface){
    const calanderUtil = new CalanderUtil()
    return <div>
        
    <div className="text-center flex justify-evenly cursor-pointer w-56">
        <div onClick={()=>{
            const newDate = calanderUtil.subMonth(props.dayjs)
            props.setDate?.(newDate)
            
            }}> {'<'} </div>
            <div className="w-24">
                {props.dayjs.format("MMM")} {props.dayjs.format('YYYY')}
            </div>
        <div onClick={()=>{
            const newDate = calanderUtil.addMonth(props.dayjs)
            props.setDate?.(newDate)}}>  {'>'}</div>
    </div>


    </div>
}

