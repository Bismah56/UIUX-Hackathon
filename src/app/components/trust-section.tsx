import { CreditCard, PackageCheck, Truck } from "lucide-react";

function TrustSec(){
    return(
        <div className="bg-[#FAF4F4] xl:h-[300px] flex lg:flex-row xl:p-[100px] lg:gap-4 xl:justify-between p-[40px] flex-col items-center gap-10">
            <div className="lg:h-[108px] lg:w-[376px] h-fit">
                <div className="flex gap-2 items-center flex-col md:flex-row">
                    <Truck size={48} />
                    <h2 className="font-medium md:text-3xl text-lg">Free Delivery</h2>
                </div>
                <p className="text-[#9F9F9F] md:text-xl mt-1 text-[14px] w-[200px] md:w-fit text-center md:text-left mx-auto">For all oders over $50, consectetur adipim scing elit.</p>
            </div>
            <div className="lg:h-[108px] lg:w-[376px] h-fit">
                <div className="flex gap-5 items-center flex-col md:flex-row">
                    <PackageCheck size={48} />
                    <h2 className="font-medium md:text-3xl text-lg">90 Days Return</h2>
                </div>
                <p className="text-[#9F9F9F] md:text-xl mt-1 text-[14px] w-[200px] md:w-fit text-center md:text-left mx-auto">If goods have problems, consectetur adipim scing elit.</p>
            </div>
            <div className="lg:h-[108px] lg:w-[376px] h-fit">
                <div className="flex gap-5 items-center flex-col md:flex-row">
                    <CreditCard size={48} />
                    <h2 className="font-medium md:text-3xl text-lg">Secure Payment</h2>
                </div>
                <p className="text-[#9F9F9F] md:text-xl mt-1 text-[14px] w-[200px] md:w-fit text-center md:text-left mx-auto">100% secure payment, consectetur adipim scing elit.</p>
            </div>
        </div>
    )
}
export default TrustSec;