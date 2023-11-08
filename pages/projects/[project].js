import Head from "next/head";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { projectsList } from "./data";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Custom404 from "../404";

export default function Project() {
    const router = useRouter();

    const [currentProject, setCurrentProject] = useState("");
    const [hovered, setHovered] = useState(false);

    useEffect(() => {
        if (router.isReady) {
            setCurrentProject(projectsList[router.query.project]);
        }
    }, [router.query.project]);

    const {
        title,
        cover,
        category,
        description,
        techStack,
        website,
        screenShots,
        nextProject,
    } = currentProject || {};

    return currentProject ? (
        <>
            <Head>
                <title>Ilya Titov | {title}</title>
            </Head>
            <div className="page-content">
                <div className="project">
                    <div className="header-project">
                        <div className="hero-image-wrapper">
                            <Image
                                src={cover}
                                fill={true}
                                sizes="100vw"
                                alt="project cover"
                                className="hero-image"
                            />
                        </div>
                    </div>

                    <section className="project-title">
                        <div>
                            <div className="page-head">
                                <h2 className="page-title">{title}</h2>
                            </div>
                            <hr className="head-separator" />
                        </div>
                    </section>

                    <section className="project-intro">
                        <div className="project-data">
                            <table>
                                <tbody>
                                    <tr>
                                        <td>
                                            <h6>Category</h6>
                                        </td>
                                        <td>
                                            <ul>
                                                <li>{category}</li>
                                            </ul>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <h6>Tech Stack</h6>
                                        </td>
                                        <td>
                                            <p>{techStack}</p>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="project-description">
                            <p>{description}</p>
                            <div className="project-website">
                                <div className="link-wrapper">
                                    <div className="link">
                                        <Link
                                            href={website}
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            ↗ View the website
                                        </Link>
                                    </div>
                                    <div className="link-underline" />
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="project-content">
                        <h6>{title}</h6>
                        <div className="project-content-wrapper">
                            {/* project images */}
                        </div>
                    </section>

                    <div
                        className="next-project"
                        onMouseEnter={() => setHovered(true)}
                        onMouseLeave={() => setHovered(false)}
                    >
                        <hr />
                        <Link href={nextProject.path}>
                            <div className="next-project-wrapper">
                                <div className="next-project-left">
                                    <div className="next-project-selected-wrapper">
                                        <motion.h4
                                            initial={{ x: "-100%" }}
                                            animate={{
                                                x: hovered ? 0 : "-100%",
                                            }}
                                            transition={{
                                                type: "tween",
                                            }}
                                            className="next-project-selected"
                                        >
                                            →
                                        </motion.h4>
                                    </div>
                                    <motion.h4
                                        initial={{ x: 0 }}
                                        animate={{
                                            x: hovered ? 24 : 0,
                                        }}
                                        transition={{
                                            type: "tween",
                                        }}
                                        className="next-project-title"
                                    >
                                        Next project
                                    </motion.h4>
                                </div>
                                <div className="next-project-right">
                                    <h4>{nextProject.title}</h4>
                                    <p>{nextProject.category}</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    ) : (
        <Custom404 />
    );
}
