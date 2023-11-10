import { useContext } from "react";
import { MenuContext } from "./MenuProvider";
import { motion } from "framer-motion";
import { fullPage } from "./animation";

export default function PageWrapper({children}) {
    const { isRoute, menuIsOpen } = useContext(MenuContext);

    return (
    <motion.div 
        variants={fullPage} 
        initial="out" 
        animate={menuIsOpen && isRoute === false ? "out" : "in"} 
        exit="out"
    >
        {children}
    </motion.div>
    );
  }