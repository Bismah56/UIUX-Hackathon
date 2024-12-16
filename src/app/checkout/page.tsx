'use client'
import Button from "../components/button";
import HeroSection from "../components/title";
import TrustSec from "../components/trust-section";

function Checkout() {
    return(
        <main>
        {/* Hero section */}
        <HeroSection title="Checkout"/>

        {/* Checkout section */}
        <section className="sm:px-[100px] px-10 py-[40px] h-fit">
            <h2 className="sm:text-[36px] text-[30px] font-semibold mb-9 w-fit mx-auto xl:mx-0">Billing details</h2>
            {/* Details Required for Billing */}
            <form action="" className="flex flex-col xl:flex-row ">
                <article className="flex flex-col lg:w-[608px]">
                    <div className="sm:flex gap-[31px]">
                        <div className="flex flex-col">
                            <label htmlFor="name1" className='font-medium'>First Name</label>
                            <input type="text" id="name1" required className="h-[65px] w-[211px] border-[1px] border-[#9f9f9f] outline-none py-4 rounded-[10px] mt-[20px] mb-[36px]"/>
                        </div> 

                        <div className="flex flex-col">
                            <label htmlFor="name2" className='font-medium'>Last Name</label>
                            <input type="text" id="name2" required className="h-[65px] w-[211px] border-[1px] border-[#9f9f9f] outline-none py-4 rounded-[10px] mt-[20px] mb-[36px]"/>
                        </div>
                    </div>

                    <label htmlFor="company" className='font-medium'>Company Name (Optional)</label>
                    <input type="text" id="company" className="inputBox px-4"/>

                    <label htmlFor="place" className='font-medium'>Country / Region</label>
                    <select id="place" className="inputBox px-4 text-[#9f9f9f]">
                        <option value="Sri Lanka">Sri Lanka</option>
                        <option value="Pakistan">Pakistan</option>
                    </select>

                    <label htmlFor="address" className='font-medium'>Street Address</label>
                    <input type="text" id="address" required className="inputBox px-4"/>

                    <label htmlFor="city" className='font-medium'>Town / City</label>
                    <input type="text" id="city" required className="inputBox px-4"/>

                    <label htmlFor="province" className='font-medium'>Province</label>
                    <select id="province" className="inputBox px-4 text-[#9f9f9f]">
                        <option value="West Province">West Province</option>
                        <option value="East Province">East Province</option>
                    </select>

                    <label htmlFor="Zipcode" className='font-medium'>Zipcode</label>
                    <input type="text" id="Zipcode" required className="inputBox px-4"/>

                    <label htmlFor="Phone" className='font-medium'>Phone</label>
                    <input type="text" id="Phone" required className="inputBox px-4"/>

                    <label htmlFor="email" className='font-medium'>Email Address</label>
                    <input type="email" id="email" required className="inputBox px-4"/>

                    <input type="text" placeholder="Additional Information" className="inputBox px-4"/>
                </article>
                
                <div className="h-fit lg:w-[608px]">
                    <div className=" flex justify-between">
                        <div className="flex flex-col gap-[22px]">
                            <h3 className="font-semibold text-[18px]">Product</h3>
                            <p className="text-[#9F9F9F]">Asgaard sofa x 1</p>
                            <p>Subtotal</p>
                            <p>Total</p>
                        </div>
                        <div className="flex flex-col gap-[22px]">
                            <h3 className="font-semibold text-[18px]">Subtotal</h3>
                            <p>Rs. 250,000.00</p>    
                            <p>Rs. 250,000.00</p>    
                            <p className="font-semibold text-[18px] text-[#B88E2F]">Rs. 250,000.00</p>    
                        </div>
                    </div>
                    <div className="border-t border-[#b9b8b8] flex flex-col gap-[30px]">
                        <h3 className="mt-4">Direct Bank Transfer</h3>
                        <p className="text-[#9F9F9F] text-xs sm:text-base">Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.</p>
                        <div className="text-[#9F9F9F] text-xs sm:text-base">
                            <input type="radio" name='payment_method' id='online'/>
                            <label htmlFor="online"> Direct Bank Transfer</label><br />
                            <input type="radio" name='payment_method' id="cod"/>
                            <label htmlFor="cod"> Cash On Delivery</label>
                        </div>
                        <p className="text-xs sm:text-base">Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <b>privacy policy</b>.</p>
                    </div>
                        <div className="mt-10 mx-auto w-fit"><Button text="Place Order" /></div>
                </div>
            </form>
        </section>
        
        {/* Trust Section */}
        <TrustSec />
        </main>
    )
}
export default Checkout;