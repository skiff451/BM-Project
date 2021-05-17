import Navigation from "../Navigation";
import Logo from "../../components/Logo";
import Contacts from "../Contacts";
import styles from "./Header.module.scss";
import BurgerMenu from "../BurgerMenu";
export default function Header() {
  return (
    <div className={styles.outer}>
      <div className={styles.container}>
        <div className={styles.inner}>
          <header className={styles.header}>
            <Logo src="/assets/logo/bm-logo-1.svg" />
            <Navigation />
            <Contacts
              tel="+380667528540"
              mail="Office@bmprom.com"
              horizontal={true}
              iconSrc={{
                tel: "/assets/contacts-img/tel-img.svg",
                mail: "/assets/contacts-img/mail-img.svg",
              }}
            />
            <BurgerMenu version={"black"} />
          </header>
        </div>
      </div>
    </div>
  );
}
