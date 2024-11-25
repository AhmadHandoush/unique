import Image from "next/image";
import "@styles/home/why.css";
function Whycomponent({ info }) {
  const { title, image, content } = info;
  return (
    <li className="info flex flex-col  items-center sm:w-full md:w-[40%] gap-3 lg:w-[30%] ">
      <Image
        src={`/assets/images/${image}`}
        alt={`unique-${title}`}
        width={80}
        height={80}
      />
      <h4 className="title prime italiana capitalize">{title}</h4>

      <p className="">{content}</p>
    </li>
  );
}

export default Whycomponent;
