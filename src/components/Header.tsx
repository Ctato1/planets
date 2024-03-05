import { AlignJustify, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import { useContext } from "react";
import { MyContext } from "./Context";

const Header: React.FC<{ data: TPlanet[]}> = ({ data }) => {
  const [bar, setBar] = useState<boolean>(false);

  const planetContext = useContext(MyContext);

  const handlePlanetChange = (planetName: string) => {
    planetContext.setPlanet(planetName);
    setBar(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setBar(false);
        return;
      }
      setBar(true);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header
      className="relative z-10 border-b-[1px] border-gray-400 max-w-screen-2xl bg-[#070724] mx-auto flex gap-5 flex-col 
      lg:flex-row md:gap-0 justify-between items-center px-[33px] pb-[27px] pt-[22px] text-white"
    >
      <div className="flex justify-between md:justify-center lg:justify-between items-center lg:w-full w-screen px-7 md:px-0">
        <h4 className="text-[18px] tracking-tighter sm:text-[28px]">
          THE PLANETS
        </h4>
        <div
          className="md:hidden cursor-pointer"
          onClick={() => setBar((prev) => !prev)}
        >
          <AlignJustify
            size={40}
            color={`${!bar ? "#fff" : "rgb(115, 115, 115)"}`}
          />
        </div>
      </div>

      <ul
        className={`flex lg:gap-[30px] gap-[10px] flex-col flex-wrap md:flex-row md:flex-nowrap duration-500 ${
          bar ? "translate-x-0" : "translate-x-full md:translate-x-0"
        } absolute top-[93px] md:static backdrop-blur-[3px]`}
      >
        {data.map((item) => (
          <li
            onClick={() => handlePlanetChange(item.name)}
            className={`${
              item.name !== "Neptune" ? "border-b-[1px] border-gray-600" : ""
            }  md:border-b-0 text-[11px] font-[700] tracking-[1px] uppercase cursor-pointer flex w-screen 
            px-8 py-2 md:px-0 md:py-0 md:w-fit justify-between items-center`}
            key={item.name}
          >
            <div className="flex gap-2 items-center">
              <div
                className={`md:hidden w-2 h-2 rounded-full`}
                style={{ backgroundColor: `${item.color}` }}
              />
              <span
              className={`${
                planetContext.planet.toUpperCase() === item.name.toUpperCase() ? "-translate-y-[10px]" : "translate-y-[-150px]"
              } duration-500 w-[10px] h-1 absolute flex  top-[0px] `}
              style={{ backgroundColor: item.color }}
            ></span>
              {item.name}
            </div>
            <div className="md:hidden">
              <ChevronRight size={10} color="#c1c1c1" />
            </div>
          </li>
        ))}
      </ul>
    </header>
  );
};
export default Header;
