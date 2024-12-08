import Btn from "./components/viewmore";
import Blogdesign from "./components/blogsec";
import Display from "./components/display";
export default function Home() {
  return (
    <main>
      {/* Hero section */}
      <section className="bg-[#FBEBB5] flex justify-end px-20 pt-10">
          {/* title */}
          <div className="w-[440px] self-center">
            <h1 className="text-3xl lg:text-5xl leading-relaxed">Rocket single seater</h1>
            <Btn text="Shop Now"/>
          </div>

          {/* hero Image */}
          <img src="/Rocket_single_seater.png" alt="seat" height={1000} width={653} className="scale-125"/>
      </section>

      {/* products */}
      <div className="flex bg-[#FAF4F4] justify-center items-center">
        <div className="flex flex-col border-2 border-black">
          <img src="Granite square side table 1.png" alt="table" className="scale-50"/>
          <div>
            <p>Side Table</p>
            <Btn text="View More"/>
          </div>
        </div>

        <div>
          <img src="Cloud sofa three seater + ottoman_3 1.png" alt="sofa" className="scale-50"/>
          <div>
            <p>Cloud Sofa</p>
            <Btn text="View More"/>
          </div>
        </div>
      </div>


        {/* Top Picks For You */}
        <Display heading='Top Picks For You' />

        {/* New Arrivals */}
        <section className="bg-[#FFF9E5] flex h-[550px] items-center">
          <img src="Asgaard sofa 1.png" alt="asgaard sofa" width={1000} className="scale-75"/>
          <div className="flex flex-col items-center gap-4">
            <h2 className="font-bold">New Arrivals</h2>
            <p className="text-4xl font-extrabold">Asgaard Sofa</p>
            <button className="px-9 py-2 border-black border-2">Order Now</button>
          </div>
        </section>

        {/* Blogs */}
        <article className="flex flex-col items-center">
          <h2>Our Blogs</h2>
          <p>Find a bright ideal to suit your taste with our great selection</p>
          <div className="flex">
            <Blogdesign src="Rectangle 13.png" />
            <Blogdesign src="Rectangle 14.png" />
            <Blogdesign src="Rectangle 15.png" />
          </div>
            <Btn text="View All Post"/>
        </article>

        {/* Instagram */}
        <section className="instagram flex flex-col justify-center items-center gap-3 h-[450px]">
          <h2 className="text-5xl font-extrabold">Our Instagram</h2>
          <p>Follow our store on Instagram</p>
          <button className="bg-[#ffeded] px-12 py-3 rounded-full shadow-zinc-400 shadow-xl">Follow Us</button>
        </section>
    </main>
  );
}
