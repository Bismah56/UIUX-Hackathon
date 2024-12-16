import Btn from "./components/viewmore";
import Blogdesign from "./components/blogsec";
import Display from "./components/display";

export default function Home() {
  return (
    <main>
      {/* Hero section */}
      <section className="bg-[#FBEBB5] h-[70vh] flex flex-col hero sm:h-[600px] sm:justify-around">
          {/* title */}
          <div className="w-fit h-fit self-center flex flex-col items-center mt-2">
            <h1 className="ml-8 mr-3 text-[30px] font-medium font lg:text-[48px] lg:w-[350px] xl:text-[64px] xl:w-[450px]">Rocket single seater</h1>
            <Btn text="Shop Now"/>
          </div>

          {/* hero Image */}
          <div className="h-3/4 w-full rocketSeater flex-grow sm:max-h-[500px] sm:max-w-[550px] self-center"></div>
      </section>

      {/* products */}
      <div className="bg-[#FAF4F4] lg:h-[500px] flex lg:flex-row flex-col justify-center items-center gap-5 p-3">

        <div className="border-2 hover:border-black lg:h-[400px] lg:w-[600px] flex flex-col p-5 w-full h-[40%] sm:w-[60%]">
          <img src="Granite square side table 1.png" alt="table" height={300} width={300} className="self-center"/>
          <div className="ml-20">
            <p className="text-[30px]">Side Table</p>
            <Btn text="View More"/>
          </div>
        </div>

        <div className="border-2 hover:border-black lg:h-[400px] lg:w-[600px] flex flex-col p-5 w-full h-[40%] sm:w-[60%]">
          <img src="Cloud sofa three seater + ottoman_3 1.png" alt="sofa" height={250} width={322} className="self-center"/>
          <div className="ml-20">
            <p className="text-[30px]">Cloud Sofa</p>
            <Btn text="View More"/>
          </div>
        </div>
      </div>


        {/* Top Picks For You */}
        <Display heading='Top Picks For You' />

        {/* New Arrivals */}
        <section className="bg-[#FFF9E5] flex flex-col h-[85vh] gap-1 lg:flex-row lg:h-[600px]">
          <div className="h-[70%] w-full lg:h-full lg:w-[65%]">
          <img src="Asgaard sofa 1.png" alt="asgaard sofa" className="w-full h-full object-contain"/>
          </div>

          <div className="flex flex-col items-center gap-2 lg:flex-grow lg:self-center">
            <h2 className="font-medium lg:text-[24px]">New Arrivals</h2>
            <p className="lg:text-4xl lg:font-bold font-semibold text-2xl">Asgaard Sofa</p>
            <button className="px-9 py-2 border-black border-2 font-medium lg:text-[20px] hover:bg-black hover:border-none hover:bg-opacity-65 hover:text-white transform transition duration-500">Order Now</button>
          </div>
        </section>

        {/* Blogs */}
        <article className="flex flex-col items-center mb-4">
          <h2 className="text-[36px] font-medium mt-5">Our Blogs</h2>
          <p className="text-[#9F9F9F] text-sm text-center pb-5">Find a bright ideal to suit your taste with our great selection</p>
          <div className="flex flex-col gap-5 lg:gap-5 lg:flex-row lg:flex-wrap lg:justify-center">
            <Blogdesign src="Rectangle 13.png" />
            <Blogdesign src="Rectangle 14.png" />
            <Blogdesign src="Rectangle 15.png" />
          </div>
            <Btn text="View All Post"/>
        </article>

        {/* Instagram */}
        <section className="instagram md:bg-center flex flex-col justify-center items-center gap-3 lg:h-[450px] h-[300px]">
          <h2 className="lg:text-5xl lg:font-bold font-semibold text-3xl">Our Instagram</h2>
          <p className="lg:text-[20px]">Follow our store on Instagram</p>
          <button className="bg-[#ffeded] px-12 py-3 rounded-full shadow-zinc-400 shadow-xl lg:text-[20px]">Follow Us</button>
        </section>
    </main>
  );
}
