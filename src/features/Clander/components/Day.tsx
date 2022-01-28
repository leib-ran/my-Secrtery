import {DayInterface} from "../../../interfaces/DayInterface"
export function Day(props:DayInterface){
    return <div className="flex flex-col border-gray-300 border text-center cursor-default">
        <div className="text-blue-500 text">
        {props.day.format("DD")}
        </div>
    </div>
    
}