import { schedule } from '../../core/consts'
import CalanderUtil from '../../core/util/calander'
import { SchedualUtil } from '../../core/util/SchedualUtil'
import {DateInterface} from '../../interfaces/DateInterface'


export function DayTasksColumn(props:DateInterface){
    const calandreUtil = new CalanderUtil()
    const secdualUtil = new SchedualUtil()
    const arr = (secdualUtil.test());
    const cellHeight = "h-"+schedule.cellHeight
    
    
        return <div>
            {arr.map((element,i)=>{
                return  <div key={i} className={` text-xs ${cellHeight} flex flex-col justify-center`}>-{element.format("hh:mma")}</div>
            })}
        </div>

}