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
  const [image, setImage] = useState(data.images.planet)


  useEffect(() => {
    setScale(false);
    setTimeout(() => {
      setRotate((prev) => prev + 360);
      setScale(true);
    }, 500);
    if (info === "OVERVIEW") {
      setPlanetInfo(data.overview);
      setImage(data.images.planet)
    } else if (info === "STRUCTURE") {
      setPlanetInfo(data.structure);
      setImage(data.images.internal)
    } else if (info === "SURFACE") {
      setPlanetInfo(data.geology);
      setImage(data.images.geology)
    }
  }, [data.geology, data.images.geology, data.images.internal, data.images.planet, data.overview, data.structure, info, data]);

  return (
    <main>
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
      <section className="">
        {/* image */}
        <div
          className={`planet flex flex-col items-center justify-center w-screen h-[300px] ${
            scale ? "planet" : "planetnon"
          }`}
        >
          <img
            src={info === 'SURFACE' ? data.images.planet : image}
            alt={data.name}
            className={`outline-none mt-11`}
            style={{
              width: `${data.width}`,
              height: `${data.height}`,
              transition: "1s",
              transform: `rotate(${rotate}deg) scale(${scale ? 1 : 0})`,
            }}
          />
          {
            info === 'SURFACE' && <img src={image} alt="" className="mb-4 animate-pulse"  style={{
              width: `90px`,
              height: `90px`,
              transition: ".3s",
              transform: `rotate(${rotate}deg) scale(${scale ? 1 : 0}) translateY(-50px)`,
            }}/>
          }
          
        </div>
        {/* description */}
        <div className="text-center px-[24px]">
          <h1 className="text-white text-[40px] font-antonio font-thin">
            {data.name.toUpperCase()}
          </h1>
          <p className="text-white text-[11px] font-[400] leading-5 opacity-70">
            {planetInfo.content}
          </p>
          <p className="text-white text-[11px] font-[400] leading-5 opacity-70 flex justify-center items-center">
            Source :{" "}
            <a href={planetInfo.source} target="_blank" className="cursor-pointer underline">
              Wikipedia <ExternalLink className="inline" />
            </a>{" "}
          </p>
        </div>
        {/* info */}
        <div className="mt-[28px] ">
          <ul className="text-white max-w-2xl w-[90%] flex flex-col gap-[8px] mx-auto ">
            <li className="border border-gray-300 px-[16px] py-[24px] flex justify-between">
              <span className="opacity-50">ROTATION TIME</span>{" "}
              <span>{data.rotation.toUpperCase()}</span>
            </li>
            <li className="border border-gray-300 px-[16px] py-[24px] flex justify-between">
              <span className="opacity-50">REVOLUTION TIME</span>{" "}
              <span>{data.revolution.toUpperCase()}</span>
            </li>
            <li className="border border-gray-300 px-[16px] py-[24px] flex justify-between">
              <span className="opacity-50">RADIUS</span>{" "}
              <span>{data.radius.toUpperCase()}</span>
            </li>
            <li className="border border-gray-300 px-[16px] py-[24px] flex justify-between">
              <span className="opacity-50">AVERAGE TEMP.</span>{" "}
              <span>{data.temperature.toUpperCase()}</span>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}
