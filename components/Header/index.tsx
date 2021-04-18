import Navigation from "../Navigation";
import Logo from "../../components/Logo";
import Contacts from "../Contacts";
import styles from "./Header.module.scss";
export default function Header() {
  return (
    <div className={styles.outer}>
      <div className={styles.container}>
        <div className={styles.inner}>
          <header className={styles.header}>
            <Logo src="/assets/logo/bm-logo-1.svg" />
            <Navigation />
            <Contacts
              tel="+380507108908"
              mail="samsonskiff@gmail.com"
              horizontal={true}
            />
          </header>
        </div>
      </div>
    </div>
  );
}
