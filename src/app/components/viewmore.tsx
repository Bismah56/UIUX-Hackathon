interface btn{
    text:string
}

function Btn(props:btn){
    return(
        <button className="mt-2 text-[18px] pb-1 border-b-[1px] border-gray-600">{props.text}</button>
    )
}
export default Btn;