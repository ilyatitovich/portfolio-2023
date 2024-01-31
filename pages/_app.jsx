import "@/styles/globals.scss";
import "@/styles/home.css";
import "@/styles/about.css";
import "@/styles/contact.css";
// import "@/styles/blog.css";
// import "@/styles/post.css";

import { AnimatePresence } from "framer-motion";
import Layout from "@/components/Layout";

export default function App({ Component, pageProps, router }) {
    return (
        <main className="container">
            <Layout>
                <AnimatePresence mode="wait">
                    <Component key={router.route} {...pageProps} />
                </AnimatePresence>
            </Layout>
        </main>
    );
}
