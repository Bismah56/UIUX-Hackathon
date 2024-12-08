import Link from "next/link";

export default function Footer() {
  return (
    <footer className="max-w-[1440px] w-full mx-auto h-[350px] px-20">
      {/* footer information */}
      <div className="lg:flex justify-around h-[90%]">

          <div>400 University Drive Suite 200 Coral Gables,<br />
               FL 33134 USA
          </div>
          {/* links */}
          <nav className="flex flex-col">
            <h4>Links</h4>
              <Link href='/'>Home</Link>
              <Link href='/shop'>Shop</Link>
              <Link href=''>About</Link>
              <Link href='/contact'>Contact</Link>
          </nav>
          {/* Help */}
          <nav className="flex flex-col">
            <h4>Help</h4>
              <Link href='/shop'>Payment Options</Link>
              <Link href='/'>Returns</Link>
              <Link href=''>Privacy Policies</Link>
          </nav>
          {/* Newsletter */}
          <form action="">
            <input type="email" placeholder="Enter Your Email Address"/>
            <input type="submit" value="Subscribe" />
          </form>

      </div>

      <hr />

      {/* copyright section */}
      <div>
        2022 Meubel House. All rights reverved
      </div>
    </footer>
  );
}
