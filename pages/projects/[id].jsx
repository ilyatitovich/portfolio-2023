import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { ReactLenis } from "@studio-freight/react-lenis";
import { getProject, getProjectsPaths } from "@/lib/projects";
import PageHead from "@/components/PageHead";
import AnimateItem from "@/components/AnimateItem";

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

    const {
        title,
        cover,
        category,
        description,
        techStack,
        website,
        desktopImages,
        nextProject,
    } = project;

    return (
        <>
            <Head>
                <title>{`Project: ${title} | Ilya Titov`}</title>
            </Head>
            <ReactLenis root>
                <div className="page-content">
                    <div className="project">
                        <AnimateItem>
                            <header className="header">
                                <div className="hero-image-wrapper">
                                    <Image
                                        src={cover}
                                        fill={true}
                                        sizes="100vw"
                                        alt="project cover"
                                        className="hero-image"
                                    />
                                </div>
                            </header>
                            <section className="title">
                                <PageHead title={title} />
                            </section>
                            <section className="intro">
                                <div className="data">
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
                                <div className="description">
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
                            </section>
                            <section className="project-content">
                                <h6>Screenshots</h6>
                                {desktopImages.map((img) => {
                                    return (
                                        <div
                                            key={img}
                                            className="project-content-wrapper"
                                        >
                                            <Image
                                                src={img}
                                                alt={img.split("/").at(-1)}
                                                width={2000}
                                                height={1070}
                                                className="project-content-image"
                                            />
                                        </div>
                                    );
                                })}
                            </section>
                            <footer className="next-project">
                                <hr />
                                <Link href={nextProject.path}>
                                    <div className="wrapper">
                                        <div className="left">
                                            <div className="selected-wrapper">
                                                <h4 className="selected">
                                                    →
                                                </h4>
                                            </div>
                                            <h4 className="next-project-title">
                                                Next project
                                            </h4>
                                        </div>
                                        <div className="next-project-right">
                                            <h4>
                                                {nextProject.path
                                                    .split("-")
                                                    .join(" ")}
                                            </h4>
                                            <p>{nextProject.category}</p>
                                        </div>
                                    </div>
                                </Link>
                            </footer>
                        </AnimateItem>
                    </div>
                </div>
            </ReactLenis>
        </>
    );
}
