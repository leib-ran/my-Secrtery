import CalanderUtil from "../../core/util/calander"
import { DaySchedual } from "./component/DaySchedual"
import { Scale } from "./component/Scale"


export function Schdeule(){
    const calanderUtil = new CalanderUtil()
    const date = calanderUtil.getDayObj()
    return <div className="flex">
        <DaySchedual dayjs={date}/>
        <Scale/>
    </div>
    
}