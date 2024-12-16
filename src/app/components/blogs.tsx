import { FaCalendar, FaTag, FaUserAlt } from "react-icons/fa"
import Btn from "./viewmore"

interface Iprops{
    src:string,
    h:string,
    p:string,
    tag:string
}

export default function Blogs(props:Iprops){
    return(
        <div className="flex flex-col">
            <div className="text-[#9F9F9F] text-[13px] lg:text-base">
                <div className="w-[75vw] h-[70vw] lg:h-[500px] lg:w-[817px]"><img src={props.src} alt="" className="object-cover h-full w-full"/></div>
                <div className="flex gap-[35px] mt-[17px] mb-[15px]">
                    <span className="flex gap-2"><FaUserAlt /> Admin</span>
                    <span className="flex gap-2"><FaCalendar /> 14 Oct 2022</span>
                    <span className="flex gap-2"><FaTag /> {props.tag}</span>
                </div>
            </div>
            <div>                
                <h2 className="md:text-[28px] text-lg font-medium">{props.h}</h2>
                <p className="text-xs lg:text-[15px] text-[#9F9F9F] mt-[12px] lg:w-[817px]">{props.p}</p>
                <Btn text="Read more"/>
            </div>
        </div>
    )
}