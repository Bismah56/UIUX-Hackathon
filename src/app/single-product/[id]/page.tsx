"use client";
import { ChevronRight, Tally1 } from "lucide-react";
import Display from "../../components/display";
import prod from '@/app/product.json';
import { GoPlus } from "react-icons/go";
import { FiMinus } from "react-icons/fi";
import { useState } from "react";
import CartSidebar from "@/app/components/cart-sidebar";
import Link from "next/link";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";

interface Params{
    params:{
        id:number
    }
}               

export default function SingleProduct({ params }:Params) {
  let [isCart, setCart] = useState(true);

  const handleCart = ()=>{
    let cart = document.getElementById('sidebar') as HTMLDivElement;
    let addToCartBtn = document.getElementById('cartBtn') as HTMLDivElement;
    cart.style.display = 'block';

    if (addToCartBtn.innerText === 'Add To Cart') {
        setCart(false);
        prod[params.id].isCart = isCart;
        addToCartBtn.innerText = 'Remove from cart';
    } else {
        setCart(true);
        prod[params.id].isCart = isCart;
        addToCartBtn.innerText = 'Add To Cart';
    }
  }

  let [count, setCount] = useState(0);
  const remove = ()=>{
    if (count>0) {
      setCount(count -= 1);
    }
    else{
      setCount(count = 0);
    }
  }
  const add = ()=>{
    setCount(count += 1);
  }

  return (
    <main>
        {/* Steps covered */}
        <div className="h-[85px] flex items-center pl-5 lg:pl-[100px] lg:gap-[24px]">
          <Link href='/' className="text-sm text-[#9F9F9F]">Home</Link>
          <ChevronRight />
          <Link href='/shop' className="text-sm text-[#9F9F9F]">Shop</Link>
          <ChevronRight />
          <Tally1 color="#9f9f9f" />
          <span>{prod[params.id].title}</span>
        </div>

        {/* Single-product Display */}  
        <section className="lg:py-[35px] lg:px-[98px] border-b-2 pb-2 border-[#D9D9D9] xl:h-[820px] flex flex-col items-center xl:flex-row xl:justify-between xl:gap-4 h-fit">

          <div className="flex xl:flex-col pb-3 gap-[32px] xl:self-start">
            <div className="xl:h-[80px] h-[50px] xl:w-[76px] w-[50px] bg-[#FFF9E5] rounded-md flex"><img src="/Granite dining table with dining chair 1.png" alt="sofa" className="h-full w-full object-contain"/></div>
            <div className="xl:h-[80px] h-[50px] xl:w-[76px] w-[50px] bg-[#FFF9E5] rounded-md flex"><img src="/Mask group (4).png" alt="sofa" className="h-full w-full object-contain"/></div>
            <div className="xl:h-[80px] h-[50px] xl:w-[76px] w-[50px] bg-[#FFF9E5] rounded-md flex"><img src="/Group 106.png" alt="sofa" className="h-full w-full object-contain"/></div>
            <div className="xl:h-[80px] h-[50px] xl:w-[76px] w-[50px] bg-[#FFF9E5] rounded-md flex"><img src="/seatsofa.png" alt="sofa" className="h-full w-full object-contain"/></div>
          </div>
          <div className="xl:h-[500px] xl:w-[423px] md:w-[60%] md:h-[60vh] bg-[#FFF9E5] rounded-[10px] flex justify-center  xl:self-start">
            <img src={prod[params.id].src} alt="single-product" className="object-contain"/>
          </div>

          <div className="xl:h-[730px] xl:w-[606px] w-[80%]">
            <div className="border-b-2 border-[#D9D9D9] pb-2 h-fit flex flex-col gap-[16px]">
              <h1 className="md:text-[40px] text-[25px] font-medium">{prod[params.id].title}</h1>
              <h2 className="md:text-[20px] text-[10px] font-medium text-[#9f9f9f]">Rs. {prod[params.id].price}.00</h2>
              <div className="flex">
                <img src="/Vector.png" alt="star" className="h-5 w-5"/>
                <img src="/Vector.png" alt="star" className="h-5 w-5"/>
                <img src="/Vector.png" alt="star" className="h-5 w-5"/>
                <img src="/Vector.png" alt="star" className="h-5 w-5"/>
                <img src="/Vector (1).png" alt="star" className="h-5 w-5"/>
                <Tally1 color="#9f9f9f" className="ml-4"/>
                <span className="text-[#9f9f9f] text-[13px] flex items-center">5 Customer Review</span>
              </div>
              <div className="xl:text-[13px] text-[12px] xl:w-[424px] h-[80px]">
                Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.
              </div>
              <div>
                <h3 className="mb-3">Size</h3>
                <div className="flex w-fit gap-4 h-[20px] items-center mb-5">
                  <div className="h-[30px] w-[30px] bg-[#FBEBB5] rounded-[5px] flex justify-center items-center text-sm">L</div>
                  <div className="h-[30px] w-[30px] bg-[#faf4f4] rounded-[5px] flex justify-center items-center text-sm">XL</div>
                  <div className="h-[30px] w-[30px] bg-[#faf4f4] rounded-[5px] flex justify-center items-center text-sm">XS</div>
                </div>
              </div>
              <div>
                <h3 className="mb-2">Color</h3>
                <div className="flex gap-4">
                  <img src="/purple.png" alt="star" />
                  <img src="/black.png" alt="star" />
                  <img src="/skin.png" alt="star" />
                </div>
              </div>

              <div className="flex text-[13px] xl:text-base">
                <div className="flex items-center justify-around border-[1px] border-black sm:w-[123px] rounded-[10px] sm:h-[64px]  h-10 w-28">
                  <div onClick={remove} className="hover:cursor-pointer"><FiMinus color="#9f9f9f"/></div>
                  <div>{count}</div>
                  <div onClick={add} className="hover:cursor-pointer"><GoPlus color="#9f9f9f"/></div>
                </div>
                <div id="cartBtn" onClick={handleCart} className="ml-5 border-[1px] border-black rounded-[15px] flex items-center justify-center  sm:w-[215px] w-fit px-4 h-10 sm:px-0 sm:h-[64px] hover:cursor-pointer">Add To Cart</div>
              </div>

              <div id='sidebar' className="hidden">
                <CartSidebar text="View Cart"/>
              </div>
            </div>

              <div className="h-fit mt-10 flex flex-col gap-3 text-[#9F9F9F] md:text-base text-sm">
                <p className="flex w-40 justify-between"><span className="w-24 flex justify-between"><span>SKU</span><span>:</span></span>SS001</p>
                <p className="flex w-40 justify-between"><span className="w-24 flex justify-between"><span>Category</span><span>:</span></span>Sofas</p>
                <p className="flex w-[290px] justify-between"><span className="w-24 flex justify-between"><span>Tags</span><span>:</span></span>Sofa,Home,Chair,Shop</p>
                <p className="flex w-fit justify-between"><span className="w-24 flex justify-between"><span>Share</span><span>:</span></span><span className="flex ml-5 gap-2 items-center"><FaFacebook size={22} color="black"/><FaLinkedin size={24} color="black"/><AiFillTwitterCircle size={24} color="black"/></span></p>
              </div>
            </div>  
        </section>

        {/* Description */}
        <section className="border-b-2 border-[#D9D9D9] xl:h-[745px] py-[50px] pl-4 xl:px-[100px] flex flex-col items-center gap-[37px]">
          <div className="flex justify-center xl:gap-[53px] gap-3">
            <h2 className="xl:text-[20px] font-medium">Description</h2>
            <h2 className="text-[#9f9f9f] xl:text-[20px] font-medium hidden sm:block">Additional Information</h2>
            <h2 className="text-[#9f9f9f] xl:text-[20px] font-medium">Reviews [5]</h2>
          </div>
         <div className="xl:w-[1026px] xl:h-[174px] text-[#9f9f9f] text-xs xl:text-base w-[80%]">
          <p>Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.</p>
          <p>Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.</p>
          </div>

          <div className="flex flex-col xl:flex-row gap-[29px] mr-4">   
            <img src="/Group 106.png" alt=""/>
            <img src="/Group 107.png" alt=""/>
          </div>
        </section>

        {/* Related Products */}
        <Display heading='Related Products' />
    </main>
  );
}

