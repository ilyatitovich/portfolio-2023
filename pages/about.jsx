import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import AnimateItem from "@/components/AnimateItem";
import PageHead from "@/components/PageHead";

export default function About() {
    return (
        <>
            <Head>
                <title>About | Ilya Titov</title>
            </Head>
            <div className="page-content">
                <div className="about">
                    <div className="about-right">
                        <AnimateItem custom={3}>
                            <div className="profile-pic-wrapper">
                                <Image
                                    src="/images/about-img.webp"
                                    alt="Ilya Titov"
                                    fill={true}
                                    sizes="100vh"
                                    priority={true}
                                    className="profile-pic"
                                />
                            </div>
                        </AnimateItem>
                    </div>
                    <div className="about-left">
                        <AnimateItem custom={2}>
                            <PageHead title="About" />
                        </AnimateItem>
                        <AnimateItem custom={1}>
                            <p className="presentation-text">
                                Hey, I&apos;m Ilya, a passionate and creative
                                web developer. With a love for crafting digital
                                experiences and a keen eye for detail, I
                                specialize in bringing ideas to life through
                                clean and efficient code.
                            </p>
                        </AnimateItem>
                        <AnimateItem>
                            <div className="resume-link">
                                <div className="link-wrapper">
                                    <div className="link">
                                        <Link
                                            href="/about/ilya_titov_resume.pdf"
                                            target="_blank"
                                            className="link-underline"
                                        >
                                            ↓ Resume
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </AnimateItem>
                    </div>
                </div>
            </div>
        </>
    );
}
