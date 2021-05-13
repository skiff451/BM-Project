import { useState } from "react";
import Image from "next/image";
import classnames from "classnames";

import Contacts from "../Contacts";
import NavItem from "../NavItem";

import styles from "./BurgerMenu.module.scss";

interface BurgerMenuProps {
  version: "black" | "white";
}

export default function BurgerMenu({ version }: BurgerMenuProps) {
  const [open, setOpen] = useState(false);
  const imgSrc =
    version === "black"
      ? "/assets/burger/menu-black.png"
      : "/assets/burger/menu-white.png";

  return (
    <div className={styles.burger}>
      <Image
        src={imgSrc}
        width={40}
        height={40}
        onClick={() => setOpen(true)}
      />
      {open && (
        <div className={styles["menu-wrapper"]}>
          <span className={styles.close}>
            <Image
              src="/assets/close/close.svg"
              alt="close"
              height="30"
              width="30"
              onClick={() => {
                setOpen(false);
              }}
            />
          </span>
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
              <Contacts
                tel="+380667528540"
                mail="Office@bmprom.com"
                horizontal={false}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
