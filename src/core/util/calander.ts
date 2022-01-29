import dayjs from 'dayjs'


class CalanderUtil{
    
    private getDay(){
        return dayjs().day()
    }
    
    
    private getDayOfMonth(year:number,month:number,day:number){
        return dayjs(new Date(year,month,day))
    }
    
    private getFirstDayOfMonth(year:number,month:number){
        return this.getDayOfMonth(year,month,1)
    }
    
    private getMonthCount(year:number,month:number){
        return 0 - this.getFirstDayOfMonth(year,month).day()
    }
    
    private getCurrentMonthCount(){
        const year = this.getYear()
        const month = this.getMonth()
        return this.getMonthCount(year,month)
        
    }
    
    public getYear(){
    return dayjs().year()
}
    
    
    private getCurrentMonthMatrix(){
        return this.getMonthMatrix(dayjs())
    }
    public getMonthMatrix(date:dayjs.Dayjs){
        const year = date.year()
        const month= date.month()
        let currentMonthCount = this.getMonthCount(year,month)
        return new Array(5).fill([]).map(()=>{
            return new Array(7).fill(null).map(()=>{
                currentMonthCount++ 
                return this.getDayOfMonth(year,month,currentMonthCount)
            })
        })
    }
    
    private getMonth(){
        return dayjs().month()
    }

    public getDayObj(){
        return  dayjs()
    }

    public addMonth(day:dayjs.Dayjs){
        return day.add(1,'month')
    }
    public subMonth(day:dayjs.Dayjs){
        return day.subtract(1,"month")
    }

    public getDayColor(date:dayjs.Dayjs,currentMonth?:number){
        if(dayjs().isSame(date,'day')){
            return "bg-blue-500 text-white font-bold"
        }

        if(date.month() === currentMonth){
            return "text-blue-500"
        }
        return "text-gray-500"
        
    }
    
    public getDayWeek(){
        const size = 7
        const res = []
        let i = 0
        while(i < 7){
            res.push(dayjs().day(i).format("dd"))
            ++i
        }
        return res
    }
    
}
export  default CalanderUtil