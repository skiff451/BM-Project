import NavItem from "../NavItem";
import styles from "./Navigation.module.scss"
export default function Navigation() {
  return (
    <div className={styles.navigation}>
      <NavItem name="Главная" path="/" />
      <NavItem name="О компании" path="/about-us" />
      <NavItem name="Продукция" path="/products" />
      <NavItem name="Контакты" path="/contacts" />
      <NavItem name="Галерея" path="/gallery" />
      <NavItem name="О станках" path="/machine-tools" />
    </div>
  );
}
