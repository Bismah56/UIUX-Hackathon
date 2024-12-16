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
            <section className="flex flex-col justify-center items-center lg:px-48 lg:pt-[80px]">
                <h2 className="md:text-[32px] text-xl mb-2 font-semibold">Get In Touch With Us</h2>
                <p className="text-center w-fit text-[#9f9f9f] text-sm md:w-[644px]">For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!</p>

                <div className="flex lg:flex-row flex-col gap-[30px]">
                    {/* Details */}
                    <div className="flex flex-col md:w-[393px] md:h-[537px] px-[50px] py-[60px] gap-[42px] h-fit w-fit">
                        <div className="grid grid-cols-2">
                            <FaLocationDot className="justify-self-end mr-4 self-center"/>
                            <h3 className="font-medium text-xl">Address</h3>
                            <p className="text-sm col-start-2">236 5th SE Avenue, New York NY10000, United States</p>
                        </div>
                        <div className="grid grid-cols-2">
                            <FaPhoneAlt className="justify-self-end mr-4 self-center" />
                            <h3 className="font-medium text-xl">Phone</h3>
                            <p className="text-sm col-start-2">Mobile: +(84) 546-6789</p>
                            <p className="text-sm col-start-2">Hotline: +(84) 456-6789</p>
                        </div>
                        <div className="grid grid-cols-2">
                            <FaClock className="justify-self-end mr-4 self-center" />
                            <h3 className="font-medium text-xl">Working Time</h3>
                            <p className="text-sm col-start-2">Monday-Friday: 9:00 - 22:00
                               Saturday-Sunday: 9:00 - 21:00</p>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <form action="" className="flex flex-col pl-[75px] pr-[30px] py-[40px]">
                        <label htmlFor="name">Your name</label>
                        <input type="text" id="name" placeholder="Abc" className="inputBox pl-2"/>

                        <label htmlFor="email">Email address</label>
                        <input type="email" id="email" placeholder="Abc@def.com" className="inputBox pl-2"/>

                        <label htmlFor="sub">Subject</label>
                        <input type="text" id="sub" placeholder="This is an optional" className="inputBox pl-2"/>

                        <label htmlFor="msg">Message</label>
                        <input type='text' id="msg" placeholder="Hi! i’d like to ask about" className="inputBox pl-2"/>

                        <div><Button text="Submit" type="submit" rounded=""/></div>
                    </form>
                </div>
            </section>

            {/* Trust Section */}
            <TrustSec />
        </main>
    )
}