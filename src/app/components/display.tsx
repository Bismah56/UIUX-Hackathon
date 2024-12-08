import Products from "../components/products";
import Btn from "../components/viewmore";
interface type{
    heading: string
}
export default function Display(props:type){
    return(
        <section>
          <div>
            <h2>{props.heading}</h2>
            <p>Find a bright ideal to suit your taste with our great selection of suspension, floor and table lights.</p>
          </div>
          {/* product display */}
          <div className="flex justify-evenly">
            <Products src="Trenton modular sofa_3 1.png" price={25000} title="Trenton modular sofa_3"/>
            <Products src="Granite dining table with dining chair 1.png" price={25000} title="Trenton modular sofa_3"/>
            <Products src="Mask group.png" price={25000} title="Outdoor bar table and stool"/>
            <Products src="Mask group (1).png" price={25000} title="Plain console with teak mirror"/>
          </div>
            <Btn text="View More"/>
        </section>
    )
}