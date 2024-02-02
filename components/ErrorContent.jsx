import Link from "next/link";
import AnimateItem from "./AnimateItem";

export default function ErrorContent({ code }) {
    return (
        <div className="error-content">
            <AnimateItem custom={2}>
                <h3>Error</h3>
            </AnimateItem>
            <AnimateItem custom={1}>
                <h1 className="error-code">{code}</h1>
            </AnimateItem>
            <AnimateItem>
                <div className="link-wrapper">
                    <div className="link-underline">
                        <Link href="/">→ back home</Link>
                    </div>
                </div>
            </AnimateItem>
        </div>
    );
}
