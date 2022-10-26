import styles from "./Footer.module.css";
import { GithubLogo, InstagramLogo, LinkedinLogo } from "phosphor-react";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <section>
        <ul>
          <li>
            <a href="https://www.linkedin.com/in/italoxsales" target="_blank">
              <LinkedinLogo size={25} color="var(--blue-dark)" />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/italoxsales/" target="_blank">
              <InstagramLogo size={25} color="var(--blue-dark)" />
            </a>
          </li>
          <li>
            <a href="https://github.com/italoxs" target="_blank">
              <GithubLogo size={25} color="var(--blue-dark)" />
            </a>
          </li>
        </ul>
      </section>
      <section>
        <p>Desenvolvedor Italo Sales</p>
      </section>
    </footer>
  );
}
