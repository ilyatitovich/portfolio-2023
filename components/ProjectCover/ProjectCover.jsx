import Image from "next/image";
import { motion } from "framer-motion";

const projectCover = {
    show: {
        opacity: 1,
        scale: 1.1,
    },

    hide: {
        opacity: 0,
        scale: 1,
    },
};

export default function ProjectCover({ title, cover }) {
    return (
        <div className="project-cover">
            <motion.div
                key={title}
                variants={projectCover}
                initial="hide"
                animate="show"
                exit="hide"
                transition={{ type: "tween", duration: 0.2, ease: "easeOut" }}
                className="image-wrapper"
            >
                <Image src={cover} alt={title} fill sizes="100vw" />
            </motion.div>
        </div>
    );
}
