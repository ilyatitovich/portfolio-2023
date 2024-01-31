import Link from "next/link";
import { motion } from "framer-motion";
import { createPath } from "@/lib/utils";
import { pageItem } from "@/components/animation";

export default function ProjectRow({
    title,
    menuIsOpen,
    handleMouseEnter,
    handleMouseLeave,
}) {
    const path = createPath(title);
    return (
        <motion.li
            variants={pageItem}
            custom={1}
            initial="hide"
            animate={menuIsOpen ? "hide" : "show"}
            exit="hide"
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
        </motion.li>
    );
}
