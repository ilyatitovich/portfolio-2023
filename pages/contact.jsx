import Head from "next/head";
import Link from "next/link";
import AnimateItem from "@/components/AnimateItem";
import PageHead from "@/components/PageHead";

export default function Contact() {
    return (
        <>
            <Head>
                <title>Contact | Ilya Titov</title>
            </Head>
            <div className="page-content">
                <div className="contact">
                    <AnimateItem>
                        <PageHead title="Contact" />
                    </AnimateItem>

                    <AnimateItem>
                        <div className="content">
                            <div className="left">
                                <table>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <h6>Mail</h6>
                                            </td>

                                            <td>
                                                <div className="link-wrapper">
                                                    <div className="link">
                                                        <Link
                                                            href="mailto:ilyatitovdev@gmail.com"
                                                            target="_blank"
                                                            rel="noreferrer"
                                                            className="link-underline"
                                                        >
                                                            ↗ Say hello!
                                                        </Link>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="right">
                                <table>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <h6>Social medias</h6>
                                            </td>
                                            <td>
                                                <ul>
                                                    <li>
                                                        <div className="link-wrapper">
                                                            <div className="link">
                                                                <Link
                                                                    href="https://github.com/ilyatitovich"
                                                                    target="_blank"
                                                                    rel="noreferrer"
                                                                    className="link-underline"
                                                                >
                                                                    ↗ GitHub
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="link-wrapper">
                                                            <div className="link">
                                                                <Link
                                                                    href="https://www.linkedin.com/in/ilyatitovich"
                                                                    target="_blank"
                                                                    rel="noreferrer"
                                                                    className="link-underline"
                                                                >
                                                                    ↗ LinkedIn
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </AnimateItem>
                </div>
            </div>
        </>
    );
}
