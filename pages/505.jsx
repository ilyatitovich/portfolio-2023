import Head from "next/head";
import ErrorContent from "@/components/ErrorContent";

export default function Custom505() {
    return (
        <>
            <Head>
                <title>Error 505 | Ilya Titov</title>
            </Head>
            <div className="page-content">
                <ErrorContent code="505" />
            </div>
        </>
    );
}
