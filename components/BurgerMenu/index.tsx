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
        </div>
      )}
    </div>
  );
}
