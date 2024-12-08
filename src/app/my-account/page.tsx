import HeroSection from "../components/title";
import TrustSec from "../components/trust-section";
import Button from "../components/button";

export default function MyAccount() {
  return (
    <main>
      {/* Hero section */}
      <HeroSection title="My Account"/>

      {/* Login & Register */}
      <div className="flex justify-center items-center h-[760px]">
        <form action="" className="flex flex-col">
          <h2>Log In</h2>
          <label htmlFor="nameOremail">Username or email address</label>
          <input type="email" id="nameOremail"/>
          <label htmlFor="password">Password</label>
          <input type="password" id="password"/>
          <input type="checkbox"  id="remember"/>
          <label htmlFor="remember">Remember</label>

          <Button text="Log In" type="submit" />
        </form>
        <form action="" className="flex flex-col">
          <h2>Register</h2>
          <label htmlFor="email">Email address</label>
          <input type="email" id="email"/>
          <p>A link to set a new password will be sent to your email address.</p>
          <p>Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our privacy policy.</p>
          <Button text="Register" type="submit" />
        </form>
      </div>

      {/* Trust Section */}
      <TrustSec />
    </main>
  );
}