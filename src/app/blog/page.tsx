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
            <section>
                <Blogs tag="Wood" src="/blog1.png" p="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum." h="Going all-in with millennial design"/>
                <Blogs tag="Handmade" src="/blog2.png" p="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum." h="Exploring new ways of decorating"/>
                <Blogs tag="Wood" src="/blog3.png" p="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum." h="Handmade pieces that took time to make"/>

                {/* Categories */}
                <div>
                    <input type="search" /><Search />
                    <h2 className="text-xl">Categories</h2>
                    <div>
                        <div>Crafts</div>
                        <span>2</span>
                        <div>Design</div>
                        <span>8</span>
                        <div>Handmade</div>
                        <span>7</span>
                        <div>Interior</div>
                        <span>1</span>
                        <div>Wood</div>
                        <span>6</span>
                    </div>
                </div>

                {/* Recent Posts */}
                <section>
                    <h2 className="text-xl">Recent Posts</h2>
                    {recents.map((post)=>{
                        return(
                            <div>
                                <Recents src={post.src} h={post.h} date={post.date}/>
                            </div>
                        )
                    })}
                </section>

                <Nav />
            </section>

            {/* Trust Section */}
            <TrustSec />
        </main>
    );
}