import Link from "next/link";

export default function Footer() {
  return (
    <footer className="max-w-[1440px] w-full mx-auto mb-[80px] lg:px-[100px] lg:pt-[98px] lg:pb-[38px] lg:mb-0">
      {/* footer information */}
      <div className="p-5 lg:flex lg:justify-between">

          <div className="text-[#9F9F9F] text-lg font-semibold tracking-wide lg:self-center">400 University Drive Suite 200 Coral Gables,<br />
               FL 33134 USA
          </div>
          {/* links */}
          <nav className="flex flex-col gap-2">
            <h4 className="text-[#b6b5b5] font-bold text-lg tracking-wide py-1">Links</h4>
              <Link href='/'>Home</Link>
              <Link href='/shop'>Shop</Link>
              <Link href=''>About</Link>
              <Link href='/contact'>Contact</Link>
          </nav>
          {/* Help */}
          <nav className="flex flex-col pb-1 gap-2">
            <h4 className="text-[#9F9F9F] font-bold text-lg tracking-wide py-1">Help</h4>
              <Link href='/shop'>Payment Options</Link>
              <Link href='/'>Returns</Link>
              <Link href=''>Privacy Policies</Link>
          </nav>
          {/* Newsletter */}
          <form action="">
            <h4 className="text-[#9F9F9F] font-bold text-lg tracking-wide py-1">Newsletter</h4>
            <input type="email" placeholder="Enter Your Email Address" className="border-b-black border-b-[1px] p-[2px] outline-none "/>
            <input type="submit" value="Subscribe" className="bg-black border-none text-white py-[3px] px-2 hover:cursor-pointer"/>
          </form>

      </div>

      <hr className="bg-zinc-600"/>

      {/* copyright section */}
      <div className="p-5">
        2022 &copy; Meubel House. All rights reverved
      </div>
    </footer>
  );
}
