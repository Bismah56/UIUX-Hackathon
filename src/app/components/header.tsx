import { Heart, Menu, Search } from "lucide-react";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/app/components/ui/sheet"
import CartSidebar from "./cart-sidebar";
import { FaRegUser } from "react-icons/fa";

export default function Header() {
  return (
    <main>
    {/* Top Header */}
    <header className="max-w-[1440px] mx-auto w-full h-[100px] flex justify-between px-5 py-[36px] lg:pl-[200px] lg:pr-[50px] xl:pl-[450px] xl:pr-[100px]">
      {/* off-screen menu */}
      <div className="lg:hidden">
        <Sheet>
            <SheetTrigger><Menu size={30}/></SheetTrigger>
            <SheetContent side='top' className="h-[310px] w-screen bg-[#f8e9e9] font-medium text-lg">
                    {/* Links */}
                    <nav className="flex flex-col justify-center items-center gap-10 mt-3">
                        <Link href='/'>Home</Link>
                        <Link href="/shop">Shop</Link>
                        <Link href='/blog'>Blog</Link>
                        <Link href='/contact'>Contact</Link>
                    </nav>
            </SheetContent>
        </Sheet>
      </div>

      {/* Links */}
        <nav className="hidden w-[430px] h-[24px] font-medium text-lg lg:flex justify-between">
            <Link href='/'>Home</Link>
            <Link href='/shop'>Shop</Link>
            <Link href='/blog'>Blog</Link>
            <Link href='/contact'>Contact</Link>
        </nav>

      {/* Quick Access Icons */}
      <div className="lg:hidden h-[100px] w-[80px] -mt-6">
          <img src="/Meubel House_Logos-05.png" alt="logo" />
      </div>

        <div className="hidden w-[247px] h-[28px] lg:flex justify-between">
          <Link href='/my-account' className="flex items-center hover:scale-110"><FaRegUser size={24} /></Link>
          <Link href='' className="flex items-center hover:scale-110"><Search size={24} /></Link>
          <Link href='' className="flex items-center hover:scale-110"><Heart size={24}/></Link>
          <CartSidebar /> 
        </div>
    </header>

    {/* Icons at Bottom for small screens*/}
        <div className="bg-[#fcdfdf] h-[70px] w-full flex justify-around items-center fixed bottom-0 z-10 lg:hidden">
          <div className="text-[14px] flex flex-col">
          <Link href='/my-account' className="flex items-center hover:scale-110 self-center"><FaRegUser size={24} /></Link>
          <span>Account</span>
          </div>
          <div className="text-[14px] flex flex-col">
          <Link href='' className="flex items-center hover:scale-110 self-center"><Search size={24} /></Link>
          <span>Search</span>
          </div>
          <div className="text-[14px] flex flex-col">
          <Link href='' className="flex items-center hover:scale-110 self-center"><Heart size={24} /></Link>
          <span>Wishlist</span>
          </div>
          <div className="text-[14px] flex flex-col">
          <Link href='' className="flex items-center hover:scale-110 self-center"><CartSidebar /> </Link>
          <span>Cart</span>
          </div>
        </div>   
    </main>
  );
}