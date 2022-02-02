import { SchedualUtil } from "../../../core/util/SchedualUtil"
import {DateInterface} from "../../../interfaces/DateInterface"
export function DaySchedual(props:DateInterface){
    const schedualUtil = new  SchedualUtil()
    const date =  props.dayjs
    const columns = schedualUtil.createColumne()
    return <div >
        <div className={"h-16 flex flex-col justify-end "}>
            <div className="border-r border-r-gray-500">
        {date.format("dddd")}

            </div>

        </div>
        <div className="grid grid-col-1 grid-row-12">
        {columns}
        </div>
        
    </div>
}