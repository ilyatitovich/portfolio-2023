import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";
import { MenuContext } from "../components/MenuProvider";
import { useContext } from "react";
import { pageItem } from "@/components/animation";


export default function Home() {
    const { menuIsOpen } = useContext(MenuContext);

    return (
        <div className="home">
            <Head>
                <title>Ilya Titov | Web Developer</title>
            </Head>
            <div className="content">
                <div className="wrapper">
                    <motion.h1
                        variants={pageItem}
                        custom={3}
                        initial="hide"
                        animate={menuIsOpen ? "hide" : "show"}
                        exit="hide"
                        className="main-title"
                    >
                        Hey, my name is Ilya
                    </motion.h1>
                </div>
                <div className="wrapper">
                    <motion.h3
                        variants={pageItem}
                        custom={2}
                        initial="hide"
                        animate={menuIsOpen ? "hide" : "show"}
                        exit="hide"
                        className="sub-title"
                    >
                        <span>I&apos;m web developer</span>
                        <span> with passion for design and music</span>
                    </motion.h3>
                </div>
                <div className="wrapper">
                    <motion.div
                        variants={pageItem}
                        custom={1}
                        initial="hide"
                        animate={menuIsOpen ? "hide" : "show"}
                        exit="hide"
                        className="links-wrapper"
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
