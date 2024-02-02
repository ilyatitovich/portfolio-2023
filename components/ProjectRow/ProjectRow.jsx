import Link from "next/link";
import { createPath } from "@/lib/utils";

export default function ProjectRow({
    title,
    handleMouseEnter,
    handleMouseLeave,
}) {
    const path = createPath(title);
    return (
        <li
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="project-row"
        >
            <Link href={`/projects/${path}`}>
                <div className="row">
                    <div className="row-left">
                        <div className="selected-wrapper">
                            <h4 className="selected">→</h4>
                        </div>
                        <h4 className="title">{title}</h4>
                    </div>
                    <div className="row-right">
                        <p className="category">Web Dev</p>
                    </div>
                </div>
            </Link>
        </li>
    );
}
