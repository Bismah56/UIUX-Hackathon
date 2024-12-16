import HeroSection from "../components/title";
import TrustSec from "../components/trust-section";
import Button from "../components/button";

export default function MyAccount() {
  return (
    <main>
      {/* Hero section */}
      <HeroSection title="My Account"/>

      {/* Login & Register */}
      <div className="flex lg:flex-row flex-col justify-center h-fit">
        <form action="" className="flex flex-col h-fit lg:w-[595px] lg:px-[80px] pl-6 py-[50px]">
          <h2 className="mb-[36px] font-medium text-[32px]">Log In</h2>
          <label htmlFor="nameOremail">Username or email address</label>
          <input type="email" id="nameOremail" className="inputBox"/>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" className="inputBox"/>
          <div className="flex gap-2">
            <input type="checkbox"  id="remember"/>
            <label htmlFor="remember">Remember</label>
          </div>
          <div className="flex gap-[31px] pt-[55px]">
          <Button text="Log In" type="submit" rounded="[10px]"/>
          <span className="text-sm text-[#727272] self-center">Lost Your Password?</span>
          </div>
        </form>
        <form action="" className="flex flex-col h-fit lg:w-[595px] lg:px-[80px] pl-6 py-[50px]">
          <h2 className="mb-[36px] font-medium text-[32px]">Register</h2>
          <label htmlFor="email">Email address</label>
          <input type="email" id="email" className="inputBox"/>
          <p className="text-sm text-[#000] mb-4 w-[70vw] lg:w-fit">A link to set a new password will be sent to your email address.</p>
          <p className="text-sm text-[#000] w-[70vw] lg:w-fit">Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <b>privacy policy</b>.</p>
          <div className="pt-[128px]">
              <Button text="Register" type="submit" w="215px" rounded="[10px]"/>
          </div>
        </form>
      </div>

      {/* Trust Section */}
      <TrustSec />
    </main>
  );
}