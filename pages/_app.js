import "@/styles/globals.css";
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
