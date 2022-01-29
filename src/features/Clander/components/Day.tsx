import CalanderUtil from "../../../core/util/calander"
import {DateInterface} from "../../../interfaces/DateInterface"

export function Day(props:DateInterface){
    const calnderUtil = new CalanderUtil()
    console.log(props.currentMonth);
    
    const color = calnderUtil.getDayColor(props.dayjs.month(),props.currentMonth)

    return <div className="flex flex-col border-gray-300 border text-center cursor-default">
        <div className={`${color} text`}>
        {props.dayjs.format("DD")}
        </div>
    </div>
    
}