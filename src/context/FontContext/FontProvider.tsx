import { useLocalStorage } from "@uidotdev/usehooks";
import { FontContextBag, FontProviderProps } from "context/FontContext/types.ts";
import { PropsWithChildren, useMemo } from "react";
import FontContext from "context/FontContext/FontContext.ts";

const FontProvider = ({ initialFont, children }: PropsWithChildren<FontProviderProps>) => {
  const [font, setFont] = useLocalStorage<string>("selected-font", initialFont)

  const values: FontContextBag = useMemo(() => ({
    font,
    setFont
  }), [font, setFont])

  return (
    <FontContext.Provider value={values}>
      {children}
    </FontContext.Provider>
  )
}

export default FontProvider