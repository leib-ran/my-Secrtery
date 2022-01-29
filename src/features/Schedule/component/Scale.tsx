import CalanderUtil from "../../../core/util/calander"
import { DayTasksColumn } from "../../DayTasksColumn/DayTasksColumn"


export function Scale(){
    const calanderUtil = new CalanderUtil()
    const day = calanderUtil.getDayObj()
    return <div>
        <DayTasksColumn dayjs={day}/>
    </div>

}