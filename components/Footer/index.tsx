import Logo from "../Logo";
import Navigation from "../Navigation";
import Contacts from "../Contacts";
import styles from "./Footer.module.scss";
export default function Footer() {
  return (
    <div className={styles.outer}>
      <div className={styles.container}>
        <div className={styles.inner}>
          <footer className={styles.footer}>
            <Logo src="/assets/logo/bm-logo-2.svg" />
            <Navigation />
            <Contacts
              tel="+380667528540"
              mail="Office@bmprom.com"
              horizontal={false}
            />
          </footer>
        </div>
      </div>
    </div>
  );
}
