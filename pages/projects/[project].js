import { useRouter } from "next/router";

export default function Project() {
    const router = useRouter();
    return (
        <div className="page-content">
            <div className="project">
                <header className="header-project">
                    <div className="hero-image-wrapper">
                        <img alt="project cover" />
                    </div>
                </header>

                <section className="project-title">
                    <div>
                        <div className="page-head">
                            <h2 className="page-title">{""}</h2>
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
                                            <li>Web Development</li>
                                        </ul>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <h6>Year</h6>
                                    </td>
                                    <td>
                                        <p>{/* year num */}</p>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="project-description">
                        <p>
                            {/* description */}
                        </p>
                        <div className="project-website">
                            <div className="link-wrapper">
                                <div className="link">
                                    <a
                                        href=""
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        ↗ View the website
                                    </a>
                                </div>
                                <div
                                    className="link-underline"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                <section className="project-content">
                    <h6>{/* section title */}</h6>
                    <div className="project-content-wrapper">
                        {/* project images */}
                    </div>
                </section>

                <div className="next-project">
                    <hr />
                    <a href="">
                        <div className="next-project-wrapper">
                            <div className="next-project-left">
                                <div className="next-project-selected-wrapper">
                                    <h4 className="next-project-selected">→</h4>
                                </div>
                                <h4
                                    className="next-project-title"
            
                                >
                                    Next project
                                </h4>
                            </div>
                            <div className="next-project-right">
                                <h4>{/* project title */}</h4>
                                <p>{/* category */}</p>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
}
