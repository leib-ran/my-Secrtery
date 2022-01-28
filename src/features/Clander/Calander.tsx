import  CalanderUtil  from "../../core/http/storage/util/calander"
import { Month } from "./components/Month";


export function Calander(){
    const test = new CalanderUtil()
    
    return <Month month={test.getCurrentMonthMatrix()}/>
}