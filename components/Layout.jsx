import ProgressBar from "./ProgressBar";
import NavBar from "./NavBar/NavBar";
import { MenuProvider } from "./MenuProvider";
import PageWrapper from "./PageWrapper";
import { useEffect } from "react";
import { setInnerVh } from "@/lib/utils";

export default function Layout({ children }) {
    useEffect(() => {
        setInnerVh();

        window.addEventListener("resize", setInnerVh);

        return () => window.removeEventListener("resize", setInnerVh);
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
