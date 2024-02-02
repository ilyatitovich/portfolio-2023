import Head from "next/head";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { getProjects } from "@/lib/projects";
import ProjectRow from "@/components/ProjectRow/ProjectRow";
import ProjectCover from "@/components/ProjectCover/ProjectCover";
import PageHead from "@/components/PageHead";
import AnimateItem from "@/components/AnimateItem";

export async function getStaticProps() {
    const projects = getProjects();

    return {
        props: {
            projects,
        },
    };
}

export default function Projects({ projects }) {
    const [currentProject, setCurrentProject] = useState(null);

    return (
        <>
            <Head>
                <title>Projects | Ilya Titov</title>
            </Head>
            <div className="page-content">
                <div className="projects">
                    <div className="left">
                        <AnimatePresence>
                            {currentProject && (
                                <ProjectCover
                                    title={currentProject.title}
                                    cover={currentProject.cover}
                                />
                            )}
                        </AnimatePresence>
                    </div>
                    <div className="right">
                        <AnimateItem>
                            <PageHead
                                title="Projects"
                                elementsNumber={projects.length}
                            />
                        </AnimateItem>
                        <ul>
                            {projects.map((project) => (
                                <AnimateItem key={project.title}>
                                    <ProjectRow
                                        title={project.title}
                                        handleMouseEnter={() =>
                                            setCurrentProject(project)
                                        }
                                        handleMouseLeave={() =>
                                            setCurrentProject(null)
                                        }
                                    />
                                </AnimateItem>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}
