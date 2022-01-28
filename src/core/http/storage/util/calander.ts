import dayjs from 'dayjs'


class CalanderUtil{
    private getYear(){
        return dayjs().year()
    }

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
    
    
    private getMonthMatrix(year:number,month:number){
        let currentMonthCount = this.getMonthCount(year,month)
        return new Array(5).fill([]).map(()=>{
            return new Array(7).fill(null).map(()=>{
                currentMonthCount++ 
                return this.getDayOfMonth(year,month,currentMonthCount)
            })
        })
    }

    public getCurrentMonthMatrix(){
        const year = this.getYear()
        const month = this.getMonth()
        return this.getMonthMatrix(year,month)
    }
    
    public getMonth(){
        return dayjs().month()
    }
    
    public test(){
        
        console.table(this.getMonthMatrix(1989,8));
    }
}
export  default CalanderUtil