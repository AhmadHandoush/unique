import Image from "next/image";
import "@styles/home/who.css";
function Who() {
  return (
    <section className="who flex flex-col lg:flex-row justify-between items-center">
      <div className="question flex flex-col w-full lg:w-1/2 mb-4 lg:mb-0 px-4">
        <div className="first flex flex-col">
          <h3 className="prime">Who we are?</h3>
          <p>
            Escape to paradise and create lasting memories in a luxury villa
            rental. Unique Stays offers a curated selection of stunning villas
            across the sun-drenched Mediterranean coast, from the vibrant shores
            of Spain to the idyllic Greek isles like Mykonos. Perhaps you prefer
            a cozy chalet nestled in the French Alps? We can find the perfect
            vacation rental to match your desires.
            <br />
            Unique Stays boasts a diverse portfolio of villas to cater to every
            wish list. Imagine unwinding by a private pool at your secluded
            Spanish villa, or waking up to breathtaking oceanfront views at your
            Grecian retreat. For larger groups, we have spacious villas that
            comfortably accommodate your entire party.
          </p>
        </div>
      </div>
      <div className="image w-full lg:w-1/2 relative">
        <Image
          src="/assets/images/Frame 1171274909.png"
          alt="unique stays who"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>
    </section>
  );
}

export default Who;
