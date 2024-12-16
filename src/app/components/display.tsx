import Products from "../components/products";
import Btn from "../components/viewmore";
interface type{
    heading: string
}
export default function Display(props:type){
    return(
        <section className="py-12 flex flex-col items-center">
          <div className="flex items-center flex-col">
            <h2 className="font-medium text-[33px]">{props.heading}</h2>
            <p className="text-[#9F9F9F] p-4 text-center text-sm">Find a bright ideal to suit your taste with our great selection of suspension, floor and table lights.</p>
          </div>
          {/* product display */}
          <div className="grid grid-rows-4 md:grid-rows-2 md:grid-cols-2 lg:grid-rows-1 lg:grid-cols-4 lg:gap-1">
            <Products src="/Trenton modular sofa_3 1.png" price={25000} title="Trenton modular sofa_3"/>
            <Products src="/Granite dining table with dining chair 1.png" price={25000} title="Trenton modular sofa_3"/>
            <Products src="/Mask group.png" price={25000} title="Outdoor bar table and stool"/>
            <Products src="/Mask group (1).png" price={25000} title="Plain console with teak mirror"/>
          </div>
          <Btn text="View More"/>
        </section>
    )
}