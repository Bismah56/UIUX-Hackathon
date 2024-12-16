'use client'
interface Iprops{
    text?:string
}
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/app/components/ui/sheet"
import Button from "./button"
import Link from "next/link"
import { ShoppingCart } from "lucide-react";

export default function CartSidebar(props:Iprops){
    
    return(
        <Sheet>
            <SheetTrigger>{props.text?<div className="border-2 border-black flex items-center justify-center rounded-lg w-[123px] h-[34px]">{props.text}</div>:<ShoppingCart size={24} className="flex items-center hover:scale-110"/>}</SheetTrigger>
            <SheetContent className="xl:h-screen xl:w-[417px] h-[85%] w-[95vw] flex flex-col" side='right'>
                <h2 className="font-semibold text-[18px] lg:text-[24px] tracking-wide -mt-2">Shopping Cart</h2>

                 {/* list of items added in cart */}
                <div className="flex-grow">
                    <div className="border-t-2 border-[#D9D9D9] flex items-center justify-around h-[120px] w-full">
                        <div className="h-[100px] w-[100px] rounded-lg bg-[#FBEBB5] flex items-center justify-center">
                            <img src="/Asgaard sofa 1.png" alt="item" className="object-contain"/>
                        </div>
                        <div className="flex-grow ml-5">
                            <div>Asgaard sofa</div>
                            <div className="text-xs text-[#B88E2F] font-medium mt-2">1 x Rs. 250,000.00</div>
                        </div>
                        <div className=" hover:cursor-pointer">
                            <img src="/close.png" alt="" />
                        </div>
                    </div>
                </div>

                {/* Buttons to cart and checkout */}
                <div className="border-t-2 border-[#D9D9D9] flex gap-7 pt-[33px]">
                <Link href="/cart"><Button text={"View Cart"} font="13px" rounded="full"/></Link>
                <Link href="/checkout"><Button text={"Checkout"} font="13px" rounded="full" /></Link>
                </div>

            </SheetContent>
        </Sheet>
    )
}