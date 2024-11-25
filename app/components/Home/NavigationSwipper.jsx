import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "@styles/home/navigation.css";

function NavigationSwipper({ handlePrev, handleNext }) {
  return (
    <div className="custom-navigation">
      <button onClick={handlePrev} className="prev-btn">
        <FaArrowLeft />
      </button>
      <button onClick={handleNext} className="next-btn">
        <FaArrowRight />
      </button>
    </div>
  );
}

export default NavigationSwipper;
