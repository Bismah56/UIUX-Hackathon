import { ChevronRight, Tally1 } from "lucide-react";
import Display from "../../components/display";
import prod from '@/app/product.json';

interface Params{
    params:{
        id:number
    }
}

export default function SingleProduct({ params }:Params) {
  return (
    <main>
        {/* Steps covered */}
        <div>
          <span>Home</span><ChevronRight /><span>Shop</span><ChevronRight /><Tally1 color="gray" /><span></span>
        </div>

        {/* Single-product Display */}
        <section>
          <img src={prod[params.id].src} alt="" />
          <div>{prod[params.id].title}</div>
        </section>

        {/* Description */}
        <section>
          <div className="flex">
            <h2>Description</h2>
            <h2>Additional Information</h2>
            <h2>Reviews [5]</h2>
          </div>
          <p>Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.</p>
          <p>Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.</p>

          <div className="flex gap-10">
            <img src="/Group 106.png" alt="" />
            <img src="/Group 107.png" alt="" />
          </div>
        </section>

        {/* Related Products */}
        <Display heading='Related Products' />
    </main>
  );
}