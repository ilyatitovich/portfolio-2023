import { createContext, useState, useEffect } from "react";
import { useRouter } from "next/router";

export const MenuContext = createContext();

export function MenuProvider({ children }) {
    const [menuIsOpen, setMenuIsOpen] = useState(false);
    const [isRoute, setIsRoute] = useState(false);
    const router = useRouter();

    useEffect(() => {
        const handleRouteChange = () => {
            setMenuIsOpen(false);
            setIsRoute(true);
        };

        const handleRouteComplete = () => {
            setIsRoute(false);
        };

        router.events.on("routeChangeStart", handleRouteChange);
        router.events.on("routeChangeComplete", handleRouteComplete);
        router.events.on("routeChangeError", handleRouteComplete);

        return () => {
            router.events.off("routeChangeStart", handleRouteChange);
            router.events.off("routeChangeComplete", handleRouteComplete);
            router.events.off("routeChangeError", handleRouteComplete);
        };
    }, []);

    return (
        <MenuContext.Provider value={{ isRoute, menuIsOpen, setMenuIsOpen }}>
            {children}
        </MenuContext.Provider>
    );
}
