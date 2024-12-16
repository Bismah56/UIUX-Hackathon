import { Search } from "lucide-react";
import Blogs from "../components/blogs";
import Nav from "../components/nav";
import HeroSection from "../components/title";
import TrustSec from "../components/trust-section";
import recents from "@/app/recent.json";
import Recents from "../components/recentposts";

export default function Blog(){
    return(
        <main>
            {/* Hero section */}
            <HeroSection title="Blog"/>

            {/* Blog Portion */}
            <section className="flex flex-col xl:grid xl:grid-cols-[2fr_1fr] gap-[54px] md:px-[100px] md:pt-[100px] pl-[20px] pt-[40px]">
                <Blogs tag="Wood" src="/blog1.png" p="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum." h="Going all-in with millennial design"/>
            {/* Categories */}
                <div className="lg:h-[537px] lg:w-[373px] flex flex-col justify-around items-center md:px-[70px] md:pb-[40px] w-[280px]">
                    <div className="flex">
                        <input type="search" className="md:h-[58px] md:w-[311px] h-10 w-60 border-[1px] border-[#9F9F9F] rounded-xl"/><Search className="self-center -ml-11"/>
                    </div>
                    <div className="text-[13px] text-[#9F9F9F] w-full h-[353px] flex flex-col justify-between lg:text-base">
                    <h2 className="text-[24px] font-medium w-fit mx-auto text-black">Categories</h2>
                        <div className="flex justify-between">
                            Crafts
                            <span>2</span>
                        </div>
                        <div className="flex justify-between">
                            Design
                            <span>8</span>
                        </div>
                        <div className="flex justify-between">
                            Handmade
                            <span>7</span>
                        </div>
                        <div className="flex justify-between">
                            Interior
                            <span>1</span>
                        </div>
                        <div className="flex justify-between">
                            Wood
                            <span>6</span>
                        </div>
                    </div>
                </div>
                <Blogs tag="Handmade" src="/blog2.png" p="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum." h="Exploring new ways of decorating"/>

                {/* Recent Posts */}
                <section  className="flex flex-col gap-[39px] xl:-mt-40 xl:pl-14">
                    <h2 className="text-xl">Recent Posts</h2>
                    {recents.map((post)=>{
                        return(
                            <div>
                                <Recents src={post.src} h={post.h} date={post.date}/>
                            </div>
                        )
                    })}
                </section>

                <Blogs tag="Wood" src="/blog3.png" p="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum." h="Handmade pieces that took time to make"/>

            </section>

            <Nav />

            {/* Trust Section */}
            <TrustSec />
        </main>
    );
}