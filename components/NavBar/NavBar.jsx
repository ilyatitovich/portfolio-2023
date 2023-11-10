import styles from "./NavBar.module.css";
import Link from "next/link";
import BurgerBtn from "../BurgerBtn/BurgerBtn";
import Menu from "../Menu/Menu";
import ThemeToggle from "../ThemeToggleBtn/ThemeToggleBtn";
import { AnimatePresence } from "framer-motion";
import { useContext } from "react";
import { MenuContext } from "../MenuProvider";

export default function NavBar() {
  const { menuIsOpen, setMenuIsOpen } = useContext(MenuContext);

  return (
    <>

        <nav className={styles.content}>
          <div className={styles.left}>
            <div className={styles.logo}>
              <Link href="/">Ilya Titov</Link>
            </div>
          </div>
          <div className={styles.right}>
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
        </nav>

      <AnimatePresence>
        {menuIsOpen && <Menu onClick={() => setMenuIsOpen(!menuIsOpen)} />}
      </AnimatePresence>
    </>
  );
}
