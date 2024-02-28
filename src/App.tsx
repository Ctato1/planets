import { useEffect, useState } from "react";
import { MyContext } from "./components/Context";
// data
import data from "./data.json";
// components
import Header from "./components/Header";
// types
import { ContextProps } from "./components/Context";
import Planets from "./components/Planets";
// empty object
const initialPlanetData: TPlanet = {
  name: "",
  overview: { content: "", source: "" },
  structure: { content: "", source: "" },
  geology: { content: "", source: "" },
  rotation: "",
  revolution: "",
  radius: "",
  temperature: "",
  images: { planet: "", internal: "", geology: "" },
  color: "",
};

function App() {
  const [planet, setPlanet] = useState<string>("EARTH");
  const [info, setInfo] = useState<string>("OVERVIEW");
  const [color, setColor] = useState<string>("");
  const [planetData, setPlanetData] = useState<TPlanet>(initialPlanetData);
  const planetContext: ContextProps = { planet, setPlanet };

  useEffect(() => {
    const selectedPlanet = data.filter(
      (item) => item.name.toUpperCase() === planetContext.planet.toUpperCase()
    )[0];
    setColor(selectedPlanet.color);
    setPlanetData(selectedPlanet);
  }, [info, planetContext.planet, planetData]);

  return (
    <MyContext.Provider value={{ planet, setPlanet }}>
      <section
        className={`bg-hero-pattern bg-center bg-no-repeat bg-cover   h-screen  mx-auto bg-[#070724] font-spartan overflow-x-hidden`}
      >
        <Header data={data} />
        <Planets color={color} info={info} setInfo={setInfo} data={planetData}/>
      </section>
    </MyContext.Provider>
  );
}

export default App;
