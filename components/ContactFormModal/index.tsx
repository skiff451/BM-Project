import Image from "next/image";
import { Dispatch, SetStateAction, useEffect } from "react";
import ContactForm from "../ContactForm";
import styles from "./ContactFormModal.module.scss";

interface ContactFormModalProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

export default function ContactFormModal({
  open,
  setOpen,
}: ContactFormModalProps) {
  
  useEffect(() => {
    const scroll = () => {
      window.scrollTo(0, 0);
    };
    if (open) window.addEventListener("scroll", scroll);

    return () => {
      window.removeEventListener("scroll", scroll);
    };
  }, [open]);

  return open ? (
    <div
      id="substrate"
      className={styles.substrate}
      onClick={(e) => {
        const div = e.target as HTMLDivElement;
        if (div.id === "substrate") {
          setOpen(false);
        }
      }}
    >
      <div className={styles["contact-form-wrapper"]}>
        <ContactForm
          title="Нужна консультация?"
          subtitle="Оставьте свои данные и мы перезвоним"
          style={{
            form: styles["contact-form"],
          }}
        />
        <span className={styles.close}>
          <Image
            src="/assets/close/close.svg"
            alt="close"
            height="40"
            width="40"
            onClick={() => { setOpen(false) }}
          />
        </span>
      </div>
    </div>
  ) : null;
}
