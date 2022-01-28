import {DateInterface} from "../../../interfaces/DateInterface"
import CalanderUtil from "../../../core/util/calander"
import React from 'react'

export function MonthBar(props:DateInterface){
    const calanderUtil = new CalanderUtil()
    return <div className="text-center flex justify-evenly cursor-pointer">
        <div onClick={()=>{
            const newDate = calanderUtil.subMonth(props.dayjs)
            props.setDate?.(newDate)
            
            }}> {'<'} </div>
        {props.dayjs.format("MMMM")}
        <div onClick={()=>{
            const newDate = calanderUtil.addMonth(props.dayjs)
            props.setDate?.(newDate)}}>  {'>'}</div>
    </div>
}

