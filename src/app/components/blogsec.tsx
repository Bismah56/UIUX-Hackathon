import { Calendar, Clock } from "lucide-react";
import Btn from "./viewmore";

interface Iprops{
    src:string,
}

export default function Blogdesign(props:Iprops) {
  return (
    <main>
      <img src={props.src} alt="pic" height={390}/>
      <p>Going all-in with millennial design</p>
      <Btn text="Read More"/>
      <p><Clock />5 min</p>
      <p><Calendar /> 12 Oct 2022</p>
    </main>
  );
}