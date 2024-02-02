import { motion } from "framer-motion";
import { MenuContext } from "@/components/MenuProvider";
import { useContext } from "react";

export const animateItem = {
    show: (i) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.05 + 0.5,
            duration: 0.5,
            ease: "easeOut",
        },
    }),

    hide: (i) => ({
        opacity: 0,
        y: -100,
        transition: {
            delay: i * 0.08,
            duration: 0.5,
            ease: "easeOut",
        },
    }),
};

export default function AnimateItem({ custom = 0, children }) {
    const { menuIsOpen } = useContext(MenuContext);

    return (
        <motion.div
            variants={animateItem}
            custom={custom}
            initial="hide"
            animate={menuIsOpen ? "hide" : "show"}
            exit="hide"
        >
            {children}
        </motion.div>
    );
}
