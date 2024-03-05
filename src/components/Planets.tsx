import { ExternalLink } from "lucide-react";
import { useEffect, useState } from "react";

interface PlanetsProps {
  info: string;
  setInfo: React.Dispatch<React.SetStateAction<string>>;
  color: string;
  data: TPlanet;
}

export default function Planets({ info, color, setInfo, data }: PlanetsProps) {
  const [rotate, setRotate] = useState(0);
  const [scale, setScale] = useState<boolean>(true);
  const [planetInfo, setPlanetInfo] = useState<{
    content: string;
    source: string;
  }>(data.overview);
  const [image, setImage] = useState(data.images.planet);

  useEffect(() => {
    setScale(false);
    setTimeout(() => {
      setRotate((prev) => prev + 360);
      setScale(true);
    }, 500);
    if (info === "OVERVIEW") {
      setPlanetInfo(data.overview);
      setImage(data.images.planet);
    } else if (info === "STRUCTURE") {
      setPlanetInfo(data.structure);
      setImage(data.images.internal);
    } else if (info === "SURFACE") {
      setPlanetInfo(data.geology);
      setImage(data.images.geology);
    }
  }, [
    data.geology,
    data.images.geology,
    data.images.internal,
    data.images.planet,
    data.overview,
    data.structure,
    info,
    data,
  ]);

  
  return (
    <main className="max-w-screen-2xl mx-auto">
      <header className="sm:hidden">
        <ul className="duration-300 overflow-hidden flex justify-around font-bold text-[9px] py-[20px] border-b-[1px] border-gray-600">
          <li
            onClick={() => setInfo("OVERVIEW")}
            className="cursor-pointer text-white tracking-[1.929px] flex flex-col relative"
          >
            OVERVIEW{" "}
            <span
              className={`${
                info === "OVERVIEW" ? "translate-y-[1px]" : ""
              } duration-500 translate-y-3 w-[95%] h-2 absolute flex  top-[25px] `}
              style={{ backgroundColor: color }}
            ></span>
          </li>
          <li
            onClick={() => setInfo("STRUCTURE")}
            className="cursor-pointer text-white tracking-[1.929px] flex flex-col relative"
          >
            STRUCTURE{" "}
            <span
              className={`${
                info === "STRUCTURE" ? "translate-y-[1px]" : "translate-y-3"
              } duration-500 translate-y-3 w-[95%] h-2 absolute flex   top-[25px] `}
              style={{ backgroundColor: color }}
            ></span>
          </li>
          <li
            onClick={() => setInfo("SURFACE")}
            className="cursor-pointer text-white tracking-[1.929px] flex flex-col relative"
          >
            SURFACE{" "}
            <span
              className={`${
                info === "SURFACE" ? "translate-y-[1px]" : "translate-y-3"
              } duration-500 translate-y-3 w-[95%] h-2 absolute flex top-[25px] `}
              style={{ backgroundColor: color }}
            ></span>
          </li>
        </ul>
      </header>
      <section className="lg:flex lg:justify-between lg:items-center lg:mt-[106px] lg:mb-[47px] lg:mx-5">
        {/* image */}
        <div
          className={`flex flex-col items-center justify-center h-[400px] lg:w-[50%] lg:h-full`}
        >
          <img
            src={info === "SURFACE" ? data.images.planet : image}
            alt={data.name}
            className={`outline-none mt-11 planet-animation`}
            style={{
              width: `calc(60px + ${data.width}) `,
              height: `calc(60px + ${data.height}) `,
            }}
          />
          {info === "SURFACE" && (
            <img
              src={image}
              alt=""
              className="mb-4 animate-pulse"
              style={{
                width: `90px`,
                height: `90px`,
                transition: ".3s",
                transform: `rotate(${rotate}deg) scale(${
                  scale ? 1 : 0
                }) translateY(-50px)`,
              }}
            />
          )}
        </div>
        {/* description */}
        <div className="text-center px-[24px] flex items-center
         md:justify-between md:text-left
         lg:flex-col lg:w-[50%]
         ">
          <div className="md:w-[339px] flex flex-col lg:gap-[20px] lg:w-[361px]">
            <h1 className="text-white text-[40px] font-antonio font-thin lg:text-[80px]">
              {data.name.toUpperCase()}
            </h1>
            <p className="text-white text-[11px] font-[400] leading-5 opacity-70 lg:text-[14px] lg:leading-6">
              {planetInfo.content}
            </p>
            <p className="text-white text-[11px] font-[400] leading-5 opacity-70 flex justify-center md:justify-start ">
              Source : 
              <a
                href={planetInfo.source}
                target="_blank"
                className="cursor-pointer underline ml-1"
              >
                Wikipedia <ExternalLink className="inline" />
              </a>{" "}
            </p>
          </div>
          <div className="hidden md:block md:w-[281px] lg:w-[361px]  lg:pt-[29px]">
            <ul className="text-white flex flex-col gap-[16px]">
              <li
               onClick={() => setInfo("OVERVIEW")}
              className="cursor-pointer border border-gray-400 py-[8px] px-[20px] flex gap-[17px] items-center font-bold tracking-[1.929px]"
              style={info === 'OVERVIEW' ? {backgroundColor:'#419EBB',border:'1px solid transparent'}:{}}
              ><span className="opacity-50">01</span>OVERVIEW</li>
              <li
               onClick={() => setInfo("STRUCTURE")}
              className="cursor-pointer border border-gray-400 py-[8px] px-[20px] flex gap-[17px] items-center font-bold tracking-[1.929px]"
              style={info === 'STRUCTURE' ? {backgroundColor:'#419EBB',border:'1px solid transparent'}:{}}
              ><span className="opacity-50">02</span>Internal Structure</li>
              <li
               onClick={() => setInfo("SURFACE")}
              className="cursor-pointer border border-gray-400 py-[8px] px-[20px] flex gap-[17px] items-center font-bold tracking-[1.929px]"
              style={info === 'SURFACE' ? {backgroundColor:'#419EBB',border:'1px solid transparent'}:{}}
              ><span className="opacity-50">03</span>Surface Geology</li>
            </ul>
          </div>
        </div>

       
      </section>
        {/* info */}
       <div className="mt-[28px] mb-10 w-[94%] mx-auto lg:w-[73%] ">
          <ul className="text-white w-[100%] flex flex-col gap-[8px] mx-auto md:flex-row lg:gap-[30px] ">
            <li className="border border-gray-300 px-[16px] py-[24px] flex justify-between md:flex-col md:w-[25%] md:py-[16px] md:px-[15px]">
              <span className="opacity-50 md:text-[8px]">ROTATION TIME</span>{" "}
              <span className="md:text-[24px] font-antonio">{data.rotation.toUpperCase()}</span>
            </li>
            <li className="border border-gray-300 px-[16px] py-[24px] flex justify-between md:flex-col md:w-[25%] md:py-[16px] md:px-[15px]">
              <span className="opacity-50 md:text-[8px]">REVOLUTION TIME</span>{" "}
              <span className="md:text-[24px] font-antonio">{data.revolution.toUpperCase()}</span>
            </li>
            <li className="border border-gray-300 px-[16px] py-[24px] flex justify-between md:flex-col md:w-[25%] md:py-[16px] md:px-[15px]">
              <span className="opacity-50 md:text-[8px]">RADIUS</span>{" "}
              <span className="md:text-[24px] font-antonio">{data.radius.toUpperCase()}</span>
            </li>
            <li className="border border-gray-300 px-[16px] py-[24px] flex justify-between md:flex-col md:w-[25%] md:py-[16px] md:px-[15px]">
              <span className="opacity-50 md:text-[8px]">AVERAGE TEMP.</span>{" "}
              <span className="md:text-[24px] font-antonio">{data.temperature.toUpperCase()}</span>
            </li>
          </ul>
        </div>
    </main>
  );
}
