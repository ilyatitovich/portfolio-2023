import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <link rel="manifest" href="/site.webmanifest" />
                <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
                <meta name="color-scheme" content="dark light" />
                <link
                    href="/fonts/studio-feixen-sans-variable.woff2"
                    rel="preload"
                    as="font"
                    crossorigin=""
                    type="font/woff2"
                />

                <meta name="theme-color" content="#606887" />
                <meta
                    name="apple-mobile-web-app-status-bar"
                    content="#606887"
                />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
