import Link from "next/link";
import { motion } from "framer-motion";
import { pageItem } from "@/components/animation";
import { MenuContext } from "../components/MenuProvider";
import { useContext } from "react";

export default function Contact() {
  const { menuIsOpen } = useContext(MenuContext);

  return (
    <div className="page-content">
      <div className="contact">
        <motion.div
          variants={pageItem}
          custom={0}
          initial="hide"
          animate={menuIsOpen ? "hide" : "show"}
          exit="hide"
        >
          <div className="page-head">
            <h2 className="page-title">Contact</h2>
          </div>
          <hr className="head-separator" />
        </motion.div>

        <div className="content">
          <div className="left">
            <table>
              <tbody>
                <tr>
                  <motion.td
                    variants={pageItem}
                    custom={1}
                    initial="hide"
                    animate={menuIsOpen ? "hide" : "show"}
                    exit="hide"
                  >
                    <h6>Mail</h6>
                  </motion.td>

                  <motion.td
                    variants={pageItem}
                    custom={1}
                    initial="hide"
                    animate={menuIsOpen ? "hide" : "show"}
                    exit="hide"
                  >
                    <div className="link-wrapper">
                      <div className="link">
                        <Link
                          href="mailto:ilyatitovich@gmail.com"
                          target="_blank"
                          rel="noreferrer"
                          className="link-underline"
                        >
                          ↗ Say hello!
                        </Link>
                      </div>
                    </div>
                  </motion.td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="right">
            <table>
              <tbody>
                <tr>
                  <motion.td
                    variants={pageItem}
                    custom={1}
                    initial="hide"
                    animate={menuIsOpen ? "hide" : "show"}
                    exit="hide"
                  >
                    <h6>Social medias</h6>
                  </motion.td>
                  <td>
                    <ul>
                      <motion.li
                        variants={pageItem}
                        custom={1}
                        initial="hide"
                        animate={menuIsOpen ? "hide" : "show"}
                        exit="hide"
                      >
                        <div className="link-wrapper">
                          <div className="link">
                            <Link
                              href="https://github.com/ilyatitovich"
                              target="_blank"
                              rel="noreferrer"
                              className="link-underline"
                            >
                              ↗ GitHub
                            </Link>
                          </div>
                        </div>
                      </motion.li>
                      <motion.li
                        variants={pageItem}
                        custom={1}
                        initial="hide"
                        animate={menuIsOpen ? "hide" : "show"}
                        exit="hide"
                      >
                        <div className="link-wrapper">
                          <div className="link">
                            <Link
                              href="https://www.linkedin.com/in/ilyatitovich"
                              target="_blank"
                              rel="noreferrer"
                              className="link-underline"
                            >
                              ↗ LinkedIn
                            </Link>
                          </div>
                        </div>
                      </motion.li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
