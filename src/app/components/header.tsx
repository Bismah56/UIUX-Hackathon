import { Heart, Menu, Search, ShoppingCart, UserCheck } from "lucide-react";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/app/components/ui/sheet"

export default function Header() {
  return (
    // Top-Header
    <header className="absolute top-0 flex lg:justify-end items-center gap-24 justify-between max-w-[1440px] mx-auto w-full px-6 lg:px-20 h-[70px]">
      {/* off-screen menu */}
      <div className="lg:hidden">
        <Sheet>
            <SheetTrigger><Menu /></SheetTrigger>
            <SheetContent side='top'>
                    {/* Links */}
                    <nav className="flex flex-col justify-center items-center">
                        <Link href='/'>Home</Link>
                        <Link href='/shop'>Shop</Link>
                        <Link href=''>About</Link>
                        <Link href='/contact'>Contact</Link>
                    </nav>
            </SheetContent>
        </Sheet>
      </div>

      {/* Links */}
        <nav className="hidden w-[430px] lg:flex gap-14">
            <Link href='/'>Home</Link>
            <Link href='/shop'>Shop</Link>
            <Link href=''>About</Link>
            <Link href='/contact'>Contact</Link>
        </nav>

      {/* Quick Access Icons */}
          <UserCheck className="lg:hidden"/>
        <div className="hidden lg:flex w-[247px] justify-around">
          <UserCheck />
          <Search />
          <Heart />
          <ShoppingCart />
        </div>
    </header>
  );
}