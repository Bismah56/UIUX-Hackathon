interface btn{
    text:string|number,
    type?:'submit',
    h?:string,
    w?:string,
    font?:string,
    rounded?:string
}

export default function Button(props:btn){
    return(
        <button className={`h-[${props.h}] w-[${props.w}] text-[${props.font}] px-10 py-2 border-[1px] border-black rounded-${props.rounded?props.rounded:'[15px]'}`} type={props.type}>
            {props.text}
        </button>
    )
}