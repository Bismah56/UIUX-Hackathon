interface btn{
    text:string,
    type?:'submit'
}

export default function Button(props:btn){
    return(
        <button className="px-10 h-[64px] bg-blue-200 rounded-[15px] w-[215px]" type={props.type}>{props.text}</button>
    )
}