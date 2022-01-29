import CalanderUtil from '../../core/util/calander'
import { SchedualUtil } from '../../core/util/SchedualUtil'
import {DateInterface} from '../../interfaces/DateInterface'


export function DayTasksColumn(props:DateInterface){
    const calandreUtil = new CalanderUtil()
    const secdualUtil = new SchedualUtil()
    const arr = (secdualUtil.test());
    
        return <div>
            {arr.map((element)=>{
                return  <div className="border border-l-blue-700 text-xs h-16 flex flex-col justify-center ml-2">-{element.format("hh:mma")}</div>
            })}
        </div>

}