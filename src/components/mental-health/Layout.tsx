import { FC, PropsWithChildren } from "react";
import Header from "./Header";
import { Urbanist } from "next/font/google";
import MobileProvider from "@/providers/MobileProvider";
const urbanist = Urbanist({ subsets: ["latin"] });

const MentalHealthLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <MobileProvider>
      <main style={urbanist.style}>
        <Header />
        {children}
      </main>
    </MobileProvider>
  );
};

export default MentalHealthLayout;
