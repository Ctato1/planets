import { useEffect, useState } from "react";
import { MyContext } from "./components/Context";
// data
import data from "./data.json";
// components
import Header from "./components/Header";
// types
import { ContextProps } from "./components/Context";
import Planets from "./components/Planets";

function App() {
  const [planet, setPlanet] = useState<string>("EARTH");
  const [info, setInfo] = useState<string>("OVERVIEW");
  const [color, setColor] = useState<string>('')
  const planetContext:ContextProps = { planet, setPlanet };

  useEffect(() => {
    const selectedPlanet = data.filter((item) => item.name.toUpperCase() === planetContext.planet.toUpperCase())[0];
    setColor(selectedPlanet.color)
  }, [info,planetContext.planet]);

  return (
    <MyContext.Provider value={{ planet, setPlanet }}>
      <section
        className={`bg-hero-pattern bg-center bg-no-repeat bg-cover   h-screen  mx-auto bg-[#070724] font-spartan overflow-x-hidden`}
      >
        <Header data={data} />
       <Planets color={color} info={info} setInfo={setInfo}/>
      </section>
    </MyContext.Provider>
  );
}

export default App;
