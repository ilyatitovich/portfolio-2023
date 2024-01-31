import Head from "next/head";
import { motion, AnimatePresence } from "framer-motion";
import { pageItem } from "@/components/animation";
import { MenuContext } from "@/components/MenuProvider";
import { useContext, useState } from "react";
import { getProjects } from "@/lib/projects";
import ProjectRow from "@/components/ProjectRow/ProjectRow";
import ProjectCover from "@/components/ProjectCover/ProjectCover";

export async function getStaticProps() {
    const projects = getProjects();

    return {
        props: {
            projects,
        },
    };
}

export default function Projects({ projects }) {
    const { menuIsOpen } = useContext(MenuContext);
    const [currentProject, setCurrentProject] = useState(null);

    return (
        <>
            <Head>
                <title>Projects | Ilya Titov</title>
            </Head>
            <div className="page-content">
                <div className="projects">
                    <div className="left">
                        <motion.div
                            variants={pageItem}
                            custom={0}
                            initial="hide"
                            animate={menuIsOpen ? "hide" : "show"}
                            exit="hide"
                        >
                            <AnimatePresence mode="wait">
                                {currentProject && (
                                    <ProjectCover
                                        title={currentProject.title}
                                        cover={currentProject.cover}
                                    />
                                )}
                            </AnimatePresence>
                        </motion.div>
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
                                <h5 className="elements-number">
                                    {projects.length}
                                </h5>
                            </div>
                            <hr className="head-separator" />
                        </motion.div>
                        <ul>
                            {projects.map((project) => (
                                <ProjectRow
                                    key={project.title}
                                    title={project.title}
                                    menuIsOpen={menuIsOpen}
                                    handleMouseEnter={() =>
                                        setCurrentProject(project)
                                    }
                                    handleMouseLeave={() =>
                                        setCurrentProject(null)
                                    }
                                />
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}
