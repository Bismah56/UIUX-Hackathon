import { Key, LayoutGrid, SlidersHorizontal, Tally1 } from "lucide-react";
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
      <div className="flex justify-between bg-[#FAF4F4]">
        <div className="flex">
          <SlidersHorizontal />Filter
          <LayoutGrid />
          <img src="/Vector.svg" alt="" />
          <Tally1 color="gray" />

          <p>Showing 1–16 of 32 results</p>
        </div>
        <div>
          <span>Sort By</span>
          <span className="">Default</span>
        </div>
      </div>

      {/* Product Cards */}
      <section>
        {
          products.map((prod)=>{
            return(
              <Link href={`/single-product/${prod.id}`} key={prod.id}>
              <Products src={prod.src} title={prod.title} price={prod.price}/>
              </Link>
            )
          })
        }
        <Nav />
      </section>

      {/* Trust Section */}
      <TrustSec />
    </main>
  );
}