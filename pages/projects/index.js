import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { pageItem } from "@/components/animation";
import { MenuContext } from "@/components/MenuProvider";
import { useContext, useState } from "react";
import { projectsList } from "@/data/data";

export default function Projects() {
    const { menuIsOpen } = useContext(MenuContext);

    const [currentProject, setCurrentProject] = useState("");

    const numOfProjects = Object.keys(projectsList).length;
    const projectRows = [];
    const projectImages = [];

    for (let key in projectsList) {
        const { id, title, cover, path, category } = projectsList[key];

        const ProjRow = () => {
            return (
                <motion.li
                    key={id}
                    variants={pageItem}
                    custom={1}
                    initial="hide"
                    animate={menuIsOpen ? "hide" : "show"}
                    exit="hide"
                    onMouseEnter={() => setCurrentProject(title)}
                    onMouseLeave={() => setCurrentProject("")}
                >
                    <Link href={path}>
                        <div className="row">
                            <div className="row-left">
                                <div className="selected-wrapper">
                                    <motion.h4
                                        initial={{ x: "-100%" }}
                                        animate={{
                                            x:
                                                currentProject === title
                                                    ? 0
                                                    : "-100%",
                                        }}
                                        transition={{
                                            type: "tween",
                                        }}
                                        className="selected"
                                    >
                                        →
                                    </motion.h4>
                                </div>
                                <motion.h4
                                    initial={{ x: 0 }}
                                    animate={{
                                        x: currentProject === title ? 24 : 0,
                                    }}
                                    transition={{
                                        type: "tween",
                                    }}
                                    className="title"
                                >
                                    {title}
                                </motion.h4>
                            </div>
                            <div className="row-right">
                                <p className="category">{category}</p>
                            </div>
                        </div>
                    </Link>
                </motion.li>
            );
        };

        const ProjImage = () => {
            return (
                <motion.div
                    key={title}
                    animate={{ opacity: currentProject === title ? 1 : 0 }}
                    transition={{
                        type: "tween",
                        duration: currentProject === title ? 0.2 : 0.5,
                        ease: "easeOut",
                    }}
                    className="image-wrapper"
                >
                    <motion.div
                        animate={{ scale: currentProject === title ? 1.1 : 1 }}
                        transition={{
                            type: "tween",
                            ease: "easeOut",
                        }}
                        className="image-scale"
                    >
                        <Image
                            src={cover}
                            alt={title}
                            fill={true}
                            sizes="100vw"
                        />
                    </motion.div>
                </motion.div>
            );
        };

        projectRows.push(ProjRow());
        projectImages.push(ProjImage());
    }

    return (
        <>
            <Head>
                <title>Ilya Titov | Projects</title>
            </Head>
            <div className="page-content">
                <div className="projects">
                    <div className="left">
                        <div className="left-inside">{projectImages}</div>
                    </div>
                    <div className="right">
                        <motion.div
                            variants={pageItem}
                            custom={0}
                            initial="hide"
                            animate={menuIsOpen ? "hide" : "show"}
                            exit="hide"
                        >
                            <div className="page-head">
                                <h2 className="page-title">Projects</h2>
                                <h5 className="elements-number">{numOfProjects}</h5>
                            </div>
                            <hr className="head-separator" />
                        </motion.div>

                        <ul>{projectRows}</ul>
                    </div>
                </div>
            </div>
        </>
    );
}
