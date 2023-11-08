import { useContext } from "react";
import { MenuContext } from "./MenuProvider";
import { motion } from "framer-motion";

  
export const pageItem = {
    show: (i) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.05 + 0.5, 
            duration: 0.3, 
            ease: "easeOut"
        }
    }),

    hide: (i) => ({
        opacity: 0,
        y: -100,
        transition: {
            delay: i * 0.08, 
            duration: 0.3, 
            ease: "easeOut"
        }
    })
};

export const menuItemAnimation = {
    show: (i) => ({
        y: 0,
        transition: { 
            delay: i * 0.1 + 0.5, 
            duration: 0.5 
        }
    }),

    hide: (i) => ({
        y: -100,
        transition: { 
            delay: i * 0.1, 
            duration: 0.3  
        }
    })
};

  // pages animation
const fullPage = {
    in: {
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.5, 
            ease: "easeOut"
        }
    },
  
    out: {
        opacity: 0,
        y: -100,
        transition: {
            ease: "easeOut"
        }
    }
  };

export function PageWrapper({children}) {
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