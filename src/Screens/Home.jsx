import { Link } from "react-scroll";
import "./HomeModule.css";

export const Home = () => {
  return (
    <>
      <div name="Home" className={"home"}>
        <div className={"titleContainer"}>
          <p>
            Expand your <br />
            <b>business</b>
          </p>
          <p>
            With the best <br />
            <b>online presence</b>
          </p>
        </div>
        <div className={"ctaContainer"}>
          <Link to="Contact" smooth duration={500} className={"callToAction"}>
            Get in Touch
          </Link>
          <Link to="Contact" smooth duration={500} className={"callToAction"}>
            Get a Quote
          </Link>
        </div>
      </div>
      
    </>
  )
};
