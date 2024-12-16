interface Iprops{
    src:string,
    h:string,
    date:string
}

export default function Recents(props:Iprops){
    return(
        <div className="flex w-[211px] h-[80px] gap-[12px]">
          <img src={props.src} alt="" />
          {/* detail */}
          <div className="flex flex-col gap-1 self-center">
            <p className="text-[14px] w-[149px]">{props.h}</p>
            {/* date */}
            <span className="text-[12px] text-[#9F9F9F]">{props.date}</span>
          </div>
        </div>
    )
}