import CalanderUtil from "../../../core/util/calander"
import {DateInterface} from "../../../interfaces/DateInterface"

export function Day(props:DateInterface){
    const calnderUtil = new CalanderUtil()
    
    const color = calnderUtil.getDayColor(props.dayjs,props.currentMonth)

    return <div draggable={true} className="flex flex-col border-gray-300 border text-center cursor-default">
        <div className={`${color}  text `}>
        {props.dayjs.format("DD")}
        </div>
    </div>
    
}