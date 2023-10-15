import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { CgSandClock } from "react-icons/cg";
import ButtonGroup from "./Carousel/ButtonGroup";
import smallIcon from '../assets/img/icon.png'

const BuildSuperConnection = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div id="build-superconnection">
      <Carousel
        swipeable={false}
        draggable={false}
        responsive={responsive}
        infinite={true}
        arrows={false}
        customButtonGroup={<ButtonGroup />}
        autoPlay
        autoPlaySpeed={3000}
        renderButtonGroupOutside={true}
      >
        <div className="build-superconnection-carousel">
          <div className="build-superconnection-carousel-upper-text">
            <p>Build SUPERCONNECTIONS !</p>
            <p>
              Connect 1:1 with anyone in the community and build a network that
              you can leverage
            </p>
          </div>

          <div className="build-superconnection-carousel-bottom-text">
            <img src={smallIcon} alt="smallIcon"/>
            <p>Investors</p>
            <img src={smallIcon} alt="smallIcon"/>
            <p>Entrepreneurs</p>
            <img src={smallIcon} alt="smallIcon"/>
            <p>CXOs</p>
            <img src={smallIcon} alt="smallIcon"/>
            <p>Founders</p>
            <img src={smallIcon} alt="smallIcon"/>
            <p>Engineers</p>
            <img src={smallIcon} alt="smallIcon"/>
            <p>Product Managers </p>
            <img src={smallIcon} alt="smallIcon"/>
            <p>Recruiters</p>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default BuildSuperConnection;
