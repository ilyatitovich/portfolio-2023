import { createContext, useState, useEffect } from "react";
import { useRouter } from "next/router";

export const MenuContext = createContext();

export function MenuProvider({ children }) {
    const [menuIsOpen, setMenuIsOpen] = useState(false);
    const [isRoute, setIsRoute] = useState(false);
    const router = useRouter();
    const { events } = router;

    useEffect(() => {
        const handleRouteChange = () => {
            setMenuIsOpen(false);
            setIsRoute(true);
        };

        const handleRouteComplete = () => {
            setIsRoute(false);
        };

        events.on("routeChangeStart", handleRouteChange);
        events.on("routeChangeComplete", handleRouteComplete);
        events.on("routeChangeError", handleRouteComplete);

        return () => {
            events.off("routeChangeStart", handleRouteChange);
            events.off("routeChangeComplete", handleRouteComplete);
            events.off("routeChangeError", handleRouteComplete);
        };
    }, [events]);

    return (
        <MenuContext.Provider value={{ isRoute, menuIsOpen, setMenuIsOpen }}>
            {children}
        </MenuContext.Provider>
    );
}
