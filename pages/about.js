import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { pageItem } from "@/components/animation";
import { MenuContext } from "../components/MenuProvider";
import { useContext } from "react";

export default function About() {
    const { menuIsOpen } = useContext(MenuContext);

    return (
        <>
            <Head>
                <title>Ilya Titov | About</title>
            </Head>
            <div className="page-content">
                <div className="about">
                    <div className="about-right">
                        <motion.div
                            variants={pageItem}
                            custom={3}
                            initial="hide"
                            animate={menuIsOpen ? "hide" : "show"}
                            exit="hide"
                            className="profile-pic-wrapper"
                        >
                            <Image
                                src="/images/profile-img.webp"
                                alt="Ilya Titov"
                                fill={true}
                                className="profile-pic"
                            />
                        </motion.div>
                    </div>
                    <div className="about-left">
                        <motion.div
                            variants={pageItem}
                            custom={2}
                            initial="hide"
                            animate={menuIsOpen ? "hide" : "show"}
                            exit="hide"
                        >
                            <div className="page-head">
                                <h2 className="page-title">About</h2>
                            </div>
                            <hr className="head-separator" />
                        </motion.div>

                        <motion.p
                            className="presentation-text"
                            variants={pageItem}
                            custom={1}
                            initial="hide"
                            animate={menuIsOpen ? "hide" : "show"}
                            exit="hide"
                        >
                            Hey, I&apos;m Ilya, a passionate web developer
                            specializing in the MERN (MongoDB, Express.js,
                            React.js, Node.js) stack. With a deep-rooted love
                            for coding and a creative mind, I bring a unique
                            blend of technical expertise and a keen eye for
                            design to the world of web development.
                        </motion.p>

                        <motion.div
                            className="resume-link"
                            variants={pageItem}
                            custom={1}
                            initial="hide"
                            animate={menuIsOpen ? "hide" : "show"}
                            exit="hide"
                        >
                            <div className="link-wrapper">
                                <div className="link">
                                    <Link
                                        href="/about/ilya_titov_resume.pdf"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="link-underline"
                                    >
                                        ↓ Resume
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </>
    );
}
