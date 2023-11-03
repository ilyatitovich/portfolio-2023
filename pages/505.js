import Link from "next/link";
import { motion } from "framer-motion";
import { MenuContext } from "../components/MenuProvider";
import { useContext } from "react";
import { pageItem } from "@/components/animation";

export default function Custom505() {
    const { menuIsOpen } = useContext(MenuContext);

    return (
        <div className="page-content">
            <div className="error">
                <div className="error-container">
                    <motion.h3
                        variants={pageItem}
                        custom={3}
                        initial="hide"
                        animate={menuIsOpen ? "hide" : "show"}
                        exit="hide"
                    >
                        Error
                    </motion.h3>
                    <motion.h1
                        variants={pageItem}
                        custom={2}
                        initial="hide"
                        animate={menuIsOpen ? "hide" : "show"}
                        exit="hide"
                        className="error-code"
                    >
                        505
                    </motion.h1>
                    <div className="link-wrapper">
                        <motion.div
                            variants={pageItem}
                            custom={1}
                            initial="hide"
                            animate={menuIsOpen ? "hide" : "show"}
                            exit="hide"
                            className="link"
                        >
                            <Link className="link-underline" href="/">
                                → back home
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
}
