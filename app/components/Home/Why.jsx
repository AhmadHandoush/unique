import Title from "./Title";
import "@styles/home/why.css";
import Whycomponent from "./Whycomponent";
function Why() {
  const why = [
    {
      id: 1,
      title: "expericence",
      image: "experience.png",
      content:
        "Unlike ordinary rentals, we offer luxurious villas in stunning locations. Our villa specialists create tailored vacations, recommending hidden gems and arranging bespoke experiences just for you.",
    },
    {
      id: 2,
      title: "hospitality",
      image: "hospitality.png",
      content:
        "The Unique Stays team provides expert advice and curates experiences based on your interests. Don’t just dream it—live it. Browse our selection and contact us today to start planning your unforgettable escape.",
    },
    {
      id: 3,
      title: "luxury",
      image: "luxury.png",
      content:
        "Elevate your stay with private chefs, in-house spas, helicopter transfers, and more. We ensure every detail is flawlessly executed for your complete satisfaction is flawlessly executed for your complete satisfaction.",
    },
  ];
  return (
    <section className="why flex flex-col gap-3  pt-5">
      <Title title="why choose us?" />
      <ul className="why-data mt-3 flex  gap-5 flex-wrap items-center justify-between w-[90%] mx-auto">
        {why.map((info) => (
          <Whycomponent key={info.id} info={info} />
        ))}
      </ul>
    </section>
  );
}

export default Why;
