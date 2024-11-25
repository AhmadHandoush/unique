import Image from "next/image";
import "@styles/home/selections.css";
import { IoLocationOutline } from "react-icons/io5";
import Link from "next/link";

function SelectionVilla() {
  return (
    <div
      style={{
        background: "#ccc",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      className="component"
    >
      <div className="image">
        <Image
          src="/assets/images/6569e584e045b-1701438852 1.png"
          alt="photo "
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>
      <div className="overlay"></div>
      <div className="compo-content">
        <h5 className="name text-white capitalize">villa name</h5>
        <div className=" loc flex gap-1 items-center ">
          <IoLocationOutline className="text-white text-2xl" />
          <span className="location text-white">Sydney</span>
        </div>
        <p className="short-des text-white">
          Exquisite luxury villa in the North, with vast outdoor spaces and
          countryside vistas...
        </p>
        <Link href="/" className="explore">
          <span className="text-white">Explore</span>
        </Link>
      </div>
    </div>
  );
}

export default SelectionVilla;
