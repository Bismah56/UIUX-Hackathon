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
            <div>
                <img src={props.src} alt=""/>
                <FaUserAlt /> Admin
                <FaCalendar /> 14 Oct 2022
                <FaTag /> {props.tag}
            </div>
            <div>
                <h2>{props.h}</h2>
                <p>{props.p}</p>
                <Btn text="Read more"/>
            </div>
        </div>
    )
}