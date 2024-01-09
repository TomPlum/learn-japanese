import { createContext } from "react";
import { FontContextBag } from "context/FontContext/types.ts";

const FontContext = createContext<FontContextBag>({
  font: ""
})

export default FontContext