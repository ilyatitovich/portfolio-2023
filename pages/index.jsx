import Head from "next/head";
import Link from "next/link";
import AnimateItem from "@/components/AnimateItem";

export default function Home() {
    return (
        <div className="home">
            <Head>
                <title>Ilya Titov | Web Developer</title>
            </Head>
            <div className="content">
                <AnimateItem custom={3}>
                    <h1 className="main-title">Hey, my name is Ilya</h1>
                </AnimateItem>
                <AnimateItem custom={2}>
                    <h3 className="sub-title">
                        <span>I&apos;m web developer</span>
                        <span> and music lover</span>
                    </h3>
                </AnimateItem>
                <AnimateItem custom={1}>
                    <div className="links-wrapper">
                        <div className="link">
                            <Link href="/projects" className="link-underline">
                                → projects
                            </Link>
                        </div>
                        <div className="link">
                            <Link href="/about" className="link-underline">
                                → about me
                            </Link>
                        </div>
                    </div>
                </AnimateItem>
            </div>
        </div>
    );
}
