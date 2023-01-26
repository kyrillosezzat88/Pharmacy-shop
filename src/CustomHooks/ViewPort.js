// this Hook to dedect size to show specific components based on screen size
import { useEffect, createContext, useContext, useState } from "react";

const ViewPortContext = createContext({
  isMobile: window.innerWidth < 769,
});

export const ViewPortProvider = ({ children }) => {
  const [isMobile, setMobile] = useState(window.innerWidth < 769);
  //handle resize event
  useEffect(() => {
    window.addEventListener("resize", () => setMobile(window.outerWidth < 769));
    return window.removeEventListener("resize", () =>
      setMobile(window.outerWidth < 769)
    );
  }, []);
  return (
    <ViewPortContext.Provider value={{ isMobile }}>
      {children}
    </ViewPortContext.Provider>
  );
};

export function useViewport() {
  return useContext(ViewPortContext);
}
