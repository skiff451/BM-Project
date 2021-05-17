import NavItem from "../../NavItem";
import styles from "./MobNav.module.scss";

export default function MobNav() {
  return (
    <div className={styles["wrapper"]}>
      <div className={styles["nav-block"]}>
        <NavItem name="Главная" path="/" />
        <NavItem name="О компании" path="/about-us" />
        <NavItem name="Продукция" path="/products" />
        <NavItem name="Контакты" path="/contacts" />
        <NavItem name="Галерея" path="/gallery" />
        <NavItem name="О станках" path="/machine-tools" />
      </div>
      <div className={styles.contacts}>
        <div className={styles.contactItem}>
          <img
            className="ico-tel"
            src="/assets/contacts-img/tel-img-white.svg"
            alt="tel"
            width={15}
            height={15}
          />
          <a href={`tel:+380667528540`}>+380667528540</a>
        </div>

        <div className={styles.contactItem}>
          <img
            className="ico-mail"
            src="/assets/contacts-img/mail-img-white.svg"
            alt="mail"
            width={15}
            height={10}
          />
          <a href={`mailto:Office@bmprom.com`}>Office@bmprom.com</a>
        </div>
      </div>
    </div>
  );
}
