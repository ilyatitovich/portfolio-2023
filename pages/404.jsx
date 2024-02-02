import Head from "next/head";
import ErrorContent from "@/components/ErrorContent";

export default function Custom404() {
    return (
        <>
            <Head>
                <title>Error 404 | Ilya Titov</title>
            </Head>

            <div className="page-content">
                <ErrorContent code="404" />
            </div>
        </>
    );
}
