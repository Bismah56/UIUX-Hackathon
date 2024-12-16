interface Iprops{
    src:string,
    price:number,
    title:string
}

export default function Products(props:Iprops) {
  return (
    <div className="flex flex-col items-center m-5">
      <div className="hover:border-2 hover:border-zinc-500 overflow-hidden h-[260px] w-[260px]">
      <img src={props.src} alt="pic" width={250} className="hover:scale-[1.1] hover:cursor-pointer transform transition duration-500 w-full h-full object-contain"/>
      </div>
      <div className="ml-4">
        <p className="text-sm">{props.title}</p>
        <p className="lg:text-[24px] text-[20px]">Rs.{props.price}.00</p>
      </div>
    </div>
  );
}