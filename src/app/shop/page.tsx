import { LayoutGrid, SlidersHorizontal, Tally1 } from "lucide-react";
import HeroSection from "../components/title";
import products from '@/app/product.json';
import Products from "@/app/components/products";
import TrustSec from "../components/trust-section";
import Link from "next/link";
import Nav from "../components/nav";

export default function Shop() {
  return (
    <main>
      {/* Hero section */}
      <HeroSection title="Shop"/>

      {/* Sort By */}
      <div className="flex flex-col bg-[#ffefef] h-[85px] justify-around sm:flex-row sm:items-center px-3 sm:justify-between sm:px-[50px] lg:px-[100px]">
        <div className="flex gap-3">
          <SlidersHorizontal />Filter
          <LayoutGrid />
          <img src="/Vector.svg" alt="" height={20} width={20} className="self-start"/>
          <Tally1 color="gray" />
          <p className="text-sm">Showing 1–16 of 32 results</p>
        </div>

        <div>
          <span className="text-sm">Sort By</span>
          <span className="text-[#9F9F9F] bg-white h-[55px] w-[180px] px-5 py-1 ml-4">Default</span>
        </div>
      </div>

      {/* Product Cards */}
      <section className="grid md:grid-cols-2 lg:grid-cols-4 lg:gap-1">
        {
          products.map((prod)=>{
            return(
              <Link href={`/single-product/${prod.id}`} key={prod.id}>
              <Products src={prod.src} title={prod.title} price={prod.price}/>
              </Link>
            )
          })
        }
      </section>
      <Nav />

      {/* Trust Section */}
      <TrustSec />
    </main>
  );
}