import {DateInterface} from "../../../interfaces/DateInterface"
import CalanderUtil from "../../../core/util/calander"
import React from 'react'

export function MonthBar(props:DateInterface){
    const calanderUtil = new CalanderUtil()
    return <div className="text-center flex justify-evenly cursor-pointer w-48">
        <div onClick={()=>{
            const newDate = calanderUtil.subMonth(props.dayjs)
            props.setDate?.(newDate)
            
            }}> {'<'} </div>
            <div className="w-24">
                {props.dayjs.format("MMMM")}

            </div>
        <div onClick={()=>{
            const newDate = calanderUtil.addMonth(props.dayjs)
            props.setDate?.(newDate)}}>  {'>'}</div>
    </div>
}

