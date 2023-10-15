import React, {useState, useEffect} from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

const ButtonGroup = ({ next, previous, ...rest }) => {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    // Set the initial value based on the window width
    setIsDesktop(window.innerWidth > 768); // Adjust the breakpoint as needed

    // Add an event listener to update the state when the window size changes
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 768); // Adjust the breakpoint as needed
    };

    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const {
    carouselState: { currentSlide },
  } = rest;
  return (
  <>
     {
      isDesktop && (
        <div className="carousel-button-group">
      <button
        className={currentSlide === 0 ? "disable" : ""}
        onClick={() => previous()}
      >
        <IoIosArrowBack />
      </button>
      <button onClick={() => next()}>
        <IoIosArrowForward />
      </button>
    </div>
      )
    }
  </>
  )
}

export default ButtonGroup;
