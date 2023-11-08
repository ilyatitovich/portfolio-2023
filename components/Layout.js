import ProgressBar from "./ProgressBar";
import NavBar from "./NavBar/NavBar";
import { MenuProvider } from "./MenuProvider";
import { PageWrapper } from "./animation";
import { useEffect } from "react";

export default function Layout({ children }) {
  useEffect(() => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--innerVh", `${vh}px`);
}, []);
  return (
    <>
      <ProgressBar />
      <MenuProvider>
        <NavBar />
        <PageWrapper>{children}</PageWrapper>
      </MenuProvider>
    </>
  );
}
