interface Iprops{
    src:string,
    h:string,
    date:string
}

export default function Recents(props:Iprops){
    return(
        <div className="flex">
          <img src={props.src} alt="" />
          {/* detail */}
          <p>{props.h}</p>
          {/* date */}
          <span>{props.date}</span>
        </div>
    )
}