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
            console.log(early);
            
        }
        return res
    }

    public test(){
        return this.getSechdualRows();
    }

    

    
}