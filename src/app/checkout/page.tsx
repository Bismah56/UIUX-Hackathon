import Button from "../components/button";
import HeroSection from "../components/title";
import TrustSec from "../components/trust-section";

function Checkout() {
    return(
        <main>
        {/* Hero section */}
        <HeroSection title="Checkout"/>

        {/* Checkout section */}
        <section>
            <h2 className="text-3xl">Billing details</h2>
            {/* Details Required for Billing */}
            <form action="" className="flex flex-col">
                <label htmlFor="name1">First Name</label>
                <input type="text" id="name1" required/>

                <label htmlFor="name2">Last Name</label>
                <input type="text" id="name2" required/>

                <label htmlFor="company">Company Name (Optional)</label>
                <input type="text" id="company" />

                <label htmlFor="place">Country / Region</label>
                <select id="place">
                    <option value="Sri Lanka">Sri Lanka</option>
                    <option value="Pakistan">Pakistan</option>
                </select>

                <label htmlFor="address">Street Address</label>
                <input type="text" id="address" required/>

                <label htmlFor="city">Town / City</label>
                <input type="text" id="city" required/>

                <label htmlFor="province">Province</label>
                <select id="province">
                    <option value="West Province">West Province</option>
                    <option value="East Province">East Province</option>
                </select>

                <label htmlFor="Zipcode">Zipcode</label>
                <input type="text" id="Zipcode" required/>

                <label htmlFor="Phone">Phone</label>
                <input type="text" id="Phone" required/>

                <label htmlFor="email">Email Address</label>
                <input type="email" id="email" required/>

                <input type="text" placeholder="Additional Information"/>
                
                <div className="grid">
                    <div>
                        <h3>Product</h3>
                        <p></p>
                        <p>Subtotal</p>
                        <p>Total</p>
                    </div>
                    <div>
                        <h3>Subtotal</h3>
                        <p></p>
                        <p></p>
                        <p></p>      
                    </div>
                    <div>
                        <h3>Direct Bank Transfer</h3>
                        <p>Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.</p>
                        <input type="radio" name='payment_method' id='online'/>
                        <label htmlFor="online">Direct Bank Transfer</label>
                        <input type="radio" name='payment_method' id="cod"/>
                        <label htmlFor="cod">Cash On Delivery</label>
                        <p>Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our privacy policy.</p>
                    </div>
                    <Button text="Place Order"/>
                </div>
            </form>
        </section>
        
        {/* Trust Section */}
        <TrustSec />
        </main>
    )
}
export default Checkout;