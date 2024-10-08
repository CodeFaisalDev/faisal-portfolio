import "./globals.css";
import AnimatedCursor from "react-animated-cursor";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";
import Navbar from "./Components/Navbar";
import MobileNavbar from "./Components/MobileNavbar";
import { SpeedInsights } from "@vercel/speed-insights/next"

export const metadata = {
  title: "Faisal Portfolio",
  description: "Faisal Portfolio Project",
};

export default function RootLayout({ children }) {

  return (
    <html lang="en" className="scroll-smooth">
      <body>
        <div className="max-md:hidden">
          <AnimatedCursor
            innerSize="25"
            outerSize="25"
            innerScale={2}
            outerScale={2}
            color="84,114,228"
          />
        </div>
        <Theme accentColor="crimson" appearance="light">
          <MobileNavbar />
          <Navbar />
          {children}
          {/* <ThemePanel /> */}
        </Theme>
      </body>
    </html>
  );
}
