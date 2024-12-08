import HeroSection from "../components/title";
import TrustSec from "../components/trust-section";

export default function ShoppingCart() {
  return (
    <main>
        {/* Hero section */}
        <HeroSection title="Cart"/>

        {/* Cart Section */}
        <section>
            <div></div>
            {/* Total Calculation */}
            <div className="bg-[#FFF9E5] h-[390px] w-[393px]">

            </div>
        </section>

        {/* Trust Section */}
        <TrustSec />
    </main>
  );
}