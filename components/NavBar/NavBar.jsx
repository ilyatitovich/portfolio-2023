import styles from "./NavBar.module.css";
import Link from "next/link";
import BurgerBtn from "../BurgerBtn/BurgerBtn";
import Menu from "../Menu/Menu";
import { AnimatePresence } from "framer-motion";
import ThemeToggle from "../ThemeToggleBtn/ThemeToggleBtn";
import { useContext } from "react";
import { MenuContext } from "../MenuProvider";

export default function NavBar() {
  const { menuIsOpen, setMenuIsOpen } = useContext(MenuContext);

  return (
    <>
      <header>
        <div className={styles.headerContent}>
          <div className={styles.leftPart}>
            <div className={styles.logo}>
              <Link href="/">Ilya Titov</Link>
            </div>
          </div>
          <div className={styles.rightPart}>
            <ul>
              <li>
                <ThemeToggle />
              </li>
              <li>
                <BurgerBtn
                  menuIsOpen={menuIsOpen}
                  onClick={() => setMenuIsOpen(!menuIsOpen)}
                />
              </li>
            </ul>
          </div>
        </div>
      </header>
      <AnimatePresence>
        {menuIsOpen && <Menu onClick={() => setMenuIsOpen(!menuIsOpen)} />}
      </AnimatePresence>
    </>
  );
}
