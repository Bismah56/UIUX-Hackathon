import { Calendar, Clock } from "lucide-react";
import Btn from "./viewmore";

interface Iprops{
    src:string,
}

export default function Blogdesign(props:Iprops) {
  return (
    <main className="pl-5">
      <div className="w-[80%] h-[50%] flex justify-center items-center lg:h-[393px] lg:w-[393px] mb-5">
      <img src={props.src} alt="pic" className="w-full h-full object-cover"/>
      </div>
      <p className="text-[18px] font-medium">Going all-in with millennial design</p>
      <Btn text="Read More"/>
      <p className="flex text-[#818181] text-sm mt-2"><Clock size={18}/>5 min</p>
      <p className="flex text-[#818181] text-sm"><Calendar size={18}/> 12 Oct 2022</p>
    </main>
  );
}