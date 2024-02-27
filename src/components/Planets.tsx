interface PlanetsProps {
  info: string;
  setInfo: React.Dispatch<React.SetStateAction<string>>;
  color: string;
}

export default function Planets({ info, color, setInfo }: PlanetsProps) {
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
                info === "OVERVIEW" ? "translate-y-[1px]" : "translate-y-"
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
      <section>
        
      </section>
    </main>
  );
}
