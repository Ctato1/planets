import { AlignJustify, ChevronRight } from "lucide-react";
import data from "../data.json";
import { useEffect, useState } from "react";



export default function Header(){
  const  [bar, setBar] = useState<boolean>(false)
  useEffect(() => {
    const handleResize = () => {
        setBar(true);
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);
    return(
      <header className="relative border-b-[1px] border-gray-400 max-w-screen-2xl bg-[#070724] mx-auto flex gap-5 flex-col 
      lg:flex-row md:gap-0 justify-between items-center px-[33px] pb-[27px] pt-[22px] text-white">
        <div className="flex justify-between sm:justify-center lg:justify-between items-center lg:w-full w-screen px-7 sm:px-0">
          <h4 className="text-[18px] tracking-tighter sm:text-[28px]">THE PLANETS</h4>
          <div className="sm:hidden cursor-pointer" onClick={()=>setBar(prev=>!prev)}>
            <AlignJustify size={40} />
          </div>
        </div>
     
        <ul className={`flex lg:gap-[30px] gap-[10px] flex-col flex-wrap sm:flex-row sm:flex-nowrap ${bar ? 'block' :'hidden' } absolute top-28 sm:static`}>
            {data.map((item) => (
            <li className="border-b-[1px] border-gray-600 sm:border-b-0 text-[11px] font-[700] tracking-[1px] uppercase cursor-pointer flex w-screen px-8 py-2 sm:px-0 sm:py-0 sm:w-fit justify-between items-center" key={item.name}>
              <div className="flex gap-2 items-center">
                <div className={`sm:hidden w-2 h-2 rounded-full`} style={{backgroundColor: `${item.color}`}}/>
                {item.name}
              </div>
              <div className="sm:hidden">
                <ChevronRight size={10} color="#c1c1c1" />
              </div>
            </li>
          ))}
        </ul>
      </header>
    )
}