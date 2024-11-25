import "@styles/home/hero.css";
import Image from "next/image";
function Hero() {
  return (
    <section className="hero">
      <div className="image bg-gray-200"></div>
      <Image
        src="/assets/images/Group 1171274946.png"
        alt="unique stays logo"
        width={442}
        height={717}
        quality={100}
        className="hero-logo"
      />

      <div className="hero-content w-full">
        <h2>Luxury Villas for Rent Across Mediterranean</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, quas.
        </p>
      </div>
    </section>
  );
}

export default Hero;
