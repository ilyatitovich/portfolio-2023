import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState, useContext } from "react";
import { getProject, getProjectsPaths } from "@/lib/projects";
import { motion } from "framer-motion";
import { pageItem } from "@/components/animation";
import { MenuContext } from "@/components/MenuProvider";
import { ReactLenis } from "@studio-freight/react-lenis";

export async function getStaticProps({ params }) {
    const project = getProject(params.id);

    return {
        props: {
            project,
        },
    };
}

export async function getStaticPaths() {
    const paths = getProjectsPaths();

    return {
        paths,
        fallback: false,
    };
}

export default function Project({ project }) {
    const { menuIsOpen } = useContext(MenuContext);
    const [hovered, setHovered] = useState(false);

    const {
        title,
        cover,
        description,
        techStack,
        website,
        desktopImages,
        nextProject,
    } = project || {};

    const desktopImagesItems = desktopImages.map((img) => {
        return (
            <div key={img} className="project-content-wrapper">
                <Image
                    src={img}
                    alt={img.split("/").at(-1)}
                    width={2000}
                    height={1070}
                    className="project-content-image"
                />
            </div>
        );
    });


    return (
        <>
            <Head>
                <title>{`Project: ${title} | Ilya Titov`}</title>
            </Head>
            <ReactLenis root>
                <div className="page-content">
                    <div className="project">
                        <motion.section
                            variants={pageItem}
                            custom={2}
                            initial="hide"
                            animate={menuIsOpen ? "hide" : "show"}
                            exit="hide"
                            className="header-project"
                        >
                            <div className="hero-image-wrapper">
                                <Image
                                    src={cover}
                                    fill={true}
                                    sizes="100vw"
                                    alt="project cover"
                                    className="hero-image"
                                />
                            </div>
                        </motion.section>

                        <motion.section
                            variants={pageItem}
                            custom={0}
                            initial="hide"
                            animate={menuIsOpen ? "hide" : "show"}
                            exit="hide"
                            className="project-title"
                        >
                            <div className="page-head">
                                <h2 className="page-title">{title}</h2>
                            </div>
                            <hr className="head-separator" />
                        </motion.section>

                        <motion.section
                            variants={pageItem}
                            custom={2}
                            initial="hide"
                            animate={menuIsOpen ? "hide" : "show"}
                            exit="hide"
                            className="project-intro"
                        >
                            <div className="project-data">
                                <table>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <h6>Category</h6>
                                            </td>
                                            <td>
                                                <ul>
                                                    <li>Web Development</li>
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
                                {website && (
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
                                )}
                            </div>
                        </motion.section>

                        <motion.section
                            variants={pageItem}
                            custom={1}
                            initial="hide"
                            animate={menuIsOpen ? "hide" : "show"}
                            exit="hide"
                            className="project-content"
                        >
                            <h6>Screenshots</h6>

                                {desktopImagesItems}

                        </motion.section>

                        <motion.div
                            variants={pageItem}
                            custom={0}
                            initial="hide"
                            animate={menuIsOpen ? "hide" : "show"}
                            exit="hide"
                            className="next-project"
                            onMouseEnter={() => setHovered(true)}
                            onMouseLeave={() => setHovered(false)}
                        >
                            <hr />
                            <Link href={nextProject}>
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
                                        <h4>
                                            {nextProject.split("-").join(" ")}
                                        </h4>
                                        <p>Web Development</p>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </ReactLenis>
        </>
    );
}
