import React, { createContext } from "react";

export interface ContextProps {
  planet: string;
  setPlanet: React.Dispatch<React.SetStateAction<string>>;
}

export const MyContext = createContext<ContextProps>({
  planet: "",
  setPlanet: () => {},
});
