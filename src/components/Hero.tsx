import mobileHero from "../assets/images/illustration-sign-up-mobile.svg";
import desktopHero from "../assets/images/illustration-sign-up-desktop.svg";
import tabletHero from "../assets/images/illustration-sign-up-tablet.svg";

function Hero() {
  return (
    <div className="xl:order-2">
      <img
        src={mobileHero}
        alt="mobile hero image"
        className="w-full mb-10 font-bold md:hidden"
      />
      <img
        src={desktopHero}
        alt="mobile hero image"
        className="w-full mb-10 font-bold hidden xl:block"
      />
      <img
        src={tabletHero}
        alt="mobile hero image"
        className="w-full mb-10 font-bold hidden md:block xl:hidden"
      />
    </div>
  );
}

export default Hero;
