import ProgressBar from "./ProgressBar";
import NavBar from "./NavBar/NavBar";
import { MenuProvider } from "./MenuProvider";
import { PageWrapper } from "./animation";

export default function Layout({ children }) {
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
