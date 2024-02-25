import {  useState } from "react";
import { MyContext } from "./components/Context";
import Header from "./components/Header";

function App() {
  const [planet, setPlanet] = useState<string>("EARTH");
  
  return (
    <MyContext.Provider value={{ planet, setPlanet }}>
      <section
        className={`bg-hero-pattern bg-hero-pattern bg-hero-pattern bg-center bg-no-repeat bg-cover   h-screen  mx-auto bg-[#070724] font-spartan overflow-x-hidden`}
      >
        <Header />
      </section>
    </MyContext.Provider>
  );
}

export default App;
