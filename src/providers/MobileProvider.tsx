import {
  FC,
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

const Context = createContext(false);

const MobileProvider: FC<PropsWithChildren> = ({ children }) => {
  const [isMobileView, setMobileView] = useState<boolean | undefined>(false);

  const [windowSize, setWindowSize] = useState(
    typeof window !== "undefined"
      ? [window.innerWidth, window.innerHeight]
      : undefined
  );

  useEffect(() => {
    if (typeof window === "undefined") return;
    const handleWindowResize = () => {
      setWindowSize([window.innerWidth, window.innerHeight]);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  useEffect(() => {
    if (windowSize && windowSize[0] < 768) setMobileView(true);
    else setMobileView(false);
  }, [windowSize]);

  return (
    <Context.Provider value={isMobileView ? true : false}>
      {children}
    </Context.Provider>
  );
};

export const useMobile = () => useContext(Context);

export default MobileProvider;
