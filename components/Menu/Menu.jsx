import styles from "./Menu.module.css";
import Link from "next/link";
import { motion } from "framer-motion";
import { menuItemAnimation } from "../animation";

export default function Menu() {
  const menuItems = ["Home", "Projects", "About", "Contact"].map((el, i) => {
    return (
      <li key={el}>
        <motion.div
          variants={menuItemAnimation}
          custom={i}
          initial="hide"
          animate="show"
          exit="hide"
          className={styles.menuItemInner}
        >
          <Link href={`/${el === "Home" ? "" : el.toLowerCase()}`}>
            <h1>{el}</h1>
          </Link>
        </motion.div>
      </li>
    );
  });

  return (
    <div className={styles.menu}>
      <div className={styles.menuContent}>
        <div className={styles.menuItems}>
          <nav>
            <ol>{menuItems}</ol>
          </nav>
        </div>

        <div className={styles.menuSocials}>
          <ul>
            <li>
              <motion.div
                variants={menuItemAnimation}
                custom={3}
                initial="hide"
                animate="show"
                exit="hide"
                className={styles.menuSocialsItem}
              >
                <div className="link-wrapper">
                  <div className="link">
                    <Link
                      href="https://github.com/ilyatitovich"
                      target="_blank"
                      rel="noreferrer"
                      className="link-underline"
                    >
                      ↗ {/* */}GitHub
                    </Link>
                  </div>
                </div>
              </motion.div>
            </li>
            <li>
              <motion.div
                variants={menuItemAnimation}
                custom={4}
                initial="hide"
                animate="show"
                exit="hide"
                className={styles.menuSocialsItem}
              >
                <div className="link-wrapper">
                  <div className="link">
                    <Link
                      href="https://www.linkedin.com/in/ilyatitovich"
                      target="_blank"
                      rel="noreferrer"
                      className="link-underline"
                    >
                      ↗ {/* */}LinkedIn
                    </Link>
                  </div>
                </div>
              </motion.div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
