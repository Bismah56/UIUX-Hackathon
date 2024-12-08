import { FaClock, FaPhoneAlt } from "react-icons/fa";
import Button from "../components/button";
import HeroSection from "../components/title";
import TrustSec from "../components/trust-section";
import { FaLocationDot } from "react-icons/fa6";

export default function Contact(){
    return(
        <main>
            {/* Hero section */}
            <HeroSection title="Contact"/>

            {/* Get In Touch With Us */}
            <section className="flex flex-col justify-center items-center">
                <h2>Get In Touch With Us</h2>
                <p className="">For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!</p>

                <div className="flex">
                    {/* Details */}
                    <div className="flex flex-col">
                        <div>
                            <FaLocationDot />
                            <h3>Address</h3>
                            <p>236 5th SE Avenue, New York NY10000, United States</p>
                        </div>
                        <div>
                            <FaPhoneAlt />
                            <h3>Phone</h3>
                            <p>Mobile: +(84) 546-6789</p>
                            <p>Hotline: +(84) 456-6789</p>
                        </div>
                        <div>
                            <FaClock />
                            <h3>Working Time</h3>
                            <p>Monday-Friday: 9:00 - 22:00
                               Saturday-Sunday: 9:00 - 21:00</p>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <form action="" className="flex flex-col">
                        <label htmlFor="name">Your name</label>
                        <input type="text" id="name" placeholder="Abc"/>

                        <label htmlFor="email">Email address</label>
                        <input type="email" id="email" placeholder="Abc@def.com"/>

                        <label htmlFor="sub">Subject</label>
                        <input type="text" id="sub" placeholder="This is an optional"/>

                        <label htmlFor="msg">Message</label>
                        <input type='text' id="msg" placeholder="Hi! i’d like to ask about"/>

                        <Button text="Submit" type="submit" />
                    </form>
                </div>
            </section>

            {/* Trust Section */}
            <TrustSec />
        </main>
    )
}