import { schedule } from "../consts";
import dayjs from "dayjs"


export class SchedualUtil{
    private getEarliestHour(){
        return dayjs().hour(schedule.earliestHour).minute(0)
    }
    
    private getLatestHour(){
        return dayjs().hour(schedule.latestHour).minute(0)
    }

    public getSechdualRows(){
        const res = []
        let early = this.getEarliestHour()
        let end = this.getLatestHour()
        while(!early.isSame(end,"minutes")){
            res.push(early)
            early = early.add(30,"minutes")            
        }
        return res
    }
    private getNumberRowa(){
        return this.getSechdualRows().length
    }

    public test(){
        return this.getSechdualRows();
    }

    public createColumne(){
        const numberOfRows = this.getNumberRowa()
        const res = []
        for (let index = 0; index < numberOfRows; index++) {
            res.push(<div key={index} className={`w-16 h-${schedule.cellHeight} border border-gray-500`}></div>)
        }
        return res
    }   
}