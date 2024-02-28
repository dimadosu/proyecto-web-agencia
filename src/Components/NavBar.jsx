import { Link } from "react-scroll";
import "./NavBarModule.css";
import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { useEffect } from "react";
import { useScrollPosition } from "../Hooks/scrollPosition";

export const NavBar = () => {
  const [navBarOpen, setNavBarOpen] = useState(false);
  /* 
    Un estado que detecta las dimensiones de la pantalla
  */
  const [windowDimension, setWindowDimension] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  //Función que setea los cambios en la dimensión de pantalla mediante el estado
  const detectDimension = () => {
    setWindowDimension({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  //Para capturar los cambios
  useEffect(() => {
    window.addEventListener("resize", detectDimension);
    windowDimension.width > 800 && setNavBarOpen(false);
    return () => {
      window.removeEventListener("resize", detectDimension);
    };
  }, [windowDimension]);

  const scrollPosition = useScrollPosition();

  //Creamos un array de objeto que contienen los links de las paginas
  //Esto permite hacer cambios más rapido, para crear un nuevo link o borrar alguno
  //Los link hacen referencia de las paginas
  const links = [
    {
      id: 1,
      link: "Home",
    },
    {
      id: 2,
      link: "Services",
    },
    {
      id: 3,
      link: "HowWeWork",
    },
    {
      id: 4,
      link: "Benefits",
    },
  ];
  return (
    <>
      <div
        className={
          navBarOpen ? "navOpen" : scrollPosition > 0 ? "navOnScroll" : "navBar"
        }
      >
        {!navBarOpen && <p className={"logo"}>DISO | Digital Solutions</p>}

        {!navBarOpen && windowDimension.width < 800 ? (
          <IoMenu size={25} onClick={() => setNavBarOpen(!navBarOpen)} />
        ) : (
          windowDimension.width < 800 && (
            <IoClose
              size={25}
              onClick={() => setNavBarOpen(!navBarOpen)}
              color="#f1f1f1"
            />
          )
        )}

        {navBarOpen &&
          (
            <ul className="linksContainer">
              {links.map((item) => (
                <div key={item.id}>
                  <Link
                    onClick={() => setNavBarOpen(false)}
                    to={item.link}
                    smooth
                    duration={500}
                    className={"navLink"}
                  >
                    {item.link === "HowWeWork" ? "How We Work" : item.link}
                  </Link>
                </div>
              ))}
            </ul>
          )}
        {
          windowDimension.width > 800 && (
            <ul className={'linksContainer'}>
              {links.map(( item) => (
                <div key={item.id}>
                  <Link
                    onClick={() => setNavBarOpen(false)}
                    to={item}
                    smooth
                    duration={500}
                    className={'navLink'}
                  >
                    {item.link === "HowWeWork" ? "How we work" : item.link}
                  </Link>
                  <div className={'border'}></div>
                </div>
              ))}
              <Link
                onClick={() => setNavBarOpen(false)}
                to="Contact"
                smooth
                duration={500}
                className={'contactLink'}
              >
                Contact
              </Link>
            </ul>
          )
        }
      </div>
    </>
  );
};
