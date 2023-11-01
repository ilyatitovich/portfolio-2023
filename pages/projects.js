import styles from "../styles/Projects.module.css";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { pageItem } from "@/components/animation";
import { MenuContext } from "../components/MenuProvider";
import { useContext, useState } from "react";

const projects = [
    {
        id: 1,
        title: "Ilya Titov",
        path: "ilyatitov",
        cover: "",
        category: "Web Development",
    },
    {
        id: 2,
        title: "Chris Pratt",
        path: "chrispratt",
        cover: "",
        category: "Web Development",
    },
];

export default function Projects() {
    const { menuIsOpen, isRoute } = useContext(MenuContext);

    const projectRows = projects.map((project, i, arr) => {
        const { id, title, path, category } = project;

        const [currentProject, setCurrentProject] = useState(false);

        return (
            <motion.li
                key={id}
                variants={pageItem}
                custom={arr.at(-i)}
                initial="hide"
                animate={menuIsOpen ? "hide" : "show"}
                exit="hide"
            >
                <Link href={`/projects/${path}`}>
                    <div className={styles.row}>
                        <div
                            className={styles.rowLeft}
                            onMouseEnter={() => setCurrentProject(true)}
                            onMouseLeave={() => setCurrentProject(false)}
                        >
                            <div className={styles.selectedWrapper}>
                                <motion.h4
                                    initial={{ x: -100 }}
                                    animate={
                                        currentProject ? { x: 0 } : { x: -100 }
                                    }
                                    transition={{
                                        type: "tween",
                                        duration: 0.5,
                                        ease: "easeOut",
                                    }}
                                    className={styles.selected}
                                >
                                    {" "}
                                    →{" "}
                                </motion.h4>
                            </div>
                            <motion.h4 className={styles.title}>
                                {title}
                            </motion.h4>
                        </div>
                        <div className={styles.rowRight}>
                            <p className={styles.category}>{category}</p>
                        </div>
                    </div>
                </Link>
            </motion.li>
        );
    });

    return (
        <div className="page-content">
            <div className={styles.projects}>
                <div className={styles.left}>
                    <div
                        className={styles.leftInside}
                        style={{
                            opacity: 1,
                            borderRadius: "0px 48px 0px 0px",
                            transform: "none",
                        }}
                    >
                        <div
                            className={styles.imageWrapper}
                            style={{ opacity: 0 }}
                        >
                            <div className={styles.imageScale}>
                                <img
                                    alt="Chris Pratt"
                                    src="/_next/image?url=https%3A%2F%2Fmedia.graphassets.com%2F7uVvYwgTHeebSFnexvTH&w=3840&q=75"
                                    style={{
                                        position: "absolute",
                                        height: "100%",
                                        width: "100%",
                                        inset: 0,
                                        color: "transparent",
                                        backgroundColor: "rgb(91, 237, 199)",
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.right}>
                    <motion.div
                        variants={pageItem}
                        custom={0}
                        initial="hide"
                        animate={menuIsOpen ? "hide" : "show"}
                        exit="hide"
                    >
                        <div className="page-head">
                            <h2 className="page-title">Projects</h2>
                            <h5 className="elements-number">2</h5>
                        </div>
                        <hr className="head-separator" />
                    </motion.div>

                    <ul>{projectRows}</ul>
                </div>
            </div>
        </div>
    );
}