import { createContext } from "react";
import { FontContextBag } from "context/FontContext/types.ts";

const FontContext = createContext<FontContextBag>({
  font: "",
  setFont: () => {
    console.debug('Failed to invoke setFont() as the FontContext has not been initialised.')
  }
})

export default FontContext