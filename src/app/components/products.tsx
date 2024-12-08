import Link from "next/link";
import prod from '@/app/product.json';

interface Iprops{
    src:string,
    price:number,
    title:string
}

export default function Products(props:Iprops) {
  return (
    <div>
    {/* <Link href={`../single-product/${prod[1].id}`} key={prod[1].id}> */}
      <img src={props.src} alt="pic" />
    {/* </Link> */}
      <div>
        <p>{props.title}</p>
        <p>Rs.{props.price}.00</p>
      </div>
    </div>
  );
}