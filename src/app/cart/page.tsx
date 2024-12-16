'use client'
import Button from "../components/button";
import HeroSection from "../components/title";
import TrustSec from "../components/trust-section";

export default function ShoppingCart() {
  return (
    <main>
        {/* Hero section */}
        <HeroSection title="Cart"/>

        {/* Cart Section */}
        <section className="flex xl:flex-row flex-col items-center xl:h-[525px] px-[100px] py-[72px] gap-8">

            <div className="lg:w-[817px] lg:h-[216px] border-[1px] border-[#D9D9D9] flex lg:flex-col gap-5">
                  <div className="bg-[#FFF9E5] lg:h-[55px] lg:w-full flex flex-col lg:flex-row justify-center lg:gap-24 items-center gap-11">
                    <span>Product</span>
                    <span>Price</span>
                    <span>Quantity</span>
                    <span>Subtotal</span>
                  </div>
                  <div className="flex flex-col lg:flex-row lg:justify-start items-center justify-between">   
                    <div className="lg:h-[100px] mr-5 lg:w-[100px] h-[30px] w-[30px] rounded-lg bg-[#FBEBB5] flex items-center justify-center">
                        <img src="/Asgaard sofa 1.png" alt="item" className="object-contain"/>
                    </div>               
                    <span className="text-[#9F9F9F] lg:text-sm text-xs mr-[70px]">Asgaard sofa</span>
                    <span className="text-[#9F9F9F] lg:text-sm text-xs mr-[70px]">Rs. 250,000.00</span>
                    <span className="h-8 w-[32px] border-[1px] border-[#D9D9D9] rounded-[5px] flex justify-center items-center text-sm mr-[70px]">1</span>
                    <span className="lg:text-sm text-xs mr-[70px]">Rs. 250,000.00</span>
                    <span className="hidden lg:block"><img src="/dustbin.png" alt="" height={28} width={20} /></span>
                  </div>
            </div>
            {/* Total Calculation */}
            <div className="bg-[#FFF9E5] h-[390px] sm:w-[393px] w-[90vw] flex flex-col items-center justify-center gap-14">
                <h2 className="text-xl font-semibold">Cart Totals</h2>
                <div className="flex gap-11">
                  <span>Subtotal</span>
                  <span className="text-[#9F9F9F]">Rs. 250,000.00</span>
                </div>
                <div className="flex gap-11">
                  <span className="text-[20px]">Total</span>
                  <span className="text-[#B88E2F] text-[20px]">Rs. 250,000.00</span>
                </div>
                <Button text={'Check Out'} />
            </div>

        </section>

        {/* Trust Section */}
        <TrustSec />
    </main>
  );
}