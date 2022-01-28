import {DateInterface} from "../../../interfaces/DateInterface"
export function Day(props:DateInterface){
    return <div className="flex flex-col border-gray-300 border text-center cursor-default">
        <div className="text-blue-500 text">
        {props.dayjs.format("DD")}
        </div>
    </div>
    
}