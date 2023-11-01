import styles from "../styles/Home.module.css";
import Link from "next/link";
import { motion } from "framer-motion";
import { MenuContext } from "../components/MenuProvider";
import { useContext } from "react";
import { pageItem } from "@/components/animation";


export default function Home() {
    const { menuIsOpen } = useContext(MenuContext);

    return (
        <div className={styles.home}>
            <div className={styles.content}>
                <div className={styles.wrapper}>
                    <motion.h1
                        variants={pageItem}
                        custom={3}
                        initial="hide"
                        animate={menuIsOpen ? "hide" : "show"}
                        exit="hide"
                        className={styles.mainTitle}
                    >
                        Hey, my name is Ilya
                    </motion.h1>
                </div>
                <div className={styles.wrapper}>
                    <motion.h3
                        variants={pageItem}
                        custom={2}
                        initial="hide"
                        animate={menuIsOpen ? "hide" : "show"}
                        exit="hide"
                        className={styles.subTitle}
                    >
                        <span>I'm web developer</span>
                        <span> with passion for design and music</span>
                    </motion.h3>
                </div>
                <div className={styles.wrapper}>
                    <motion.div
                        variants={pageItem}
                        custom={1}
                        initial="hide"
                        animate={menuIsOpen ? "hide" : "show"}
                        exit="hide"
                        className={styles.linksWrapper}
                    >
                        <div className="link">
                            <Link href="/projects" className="link-underline">
                                → projects
                            </Link>
                        </div>
                        <div className="link">
                            <Link href="/about" className="link-underline">
                                → about me
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
