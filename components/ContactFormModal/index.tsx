import { useState } from "react";
import ContactForm from "../ContactForm";
import styles from "./ContactFormModal.module.scss";

export default function ContactFormModal() {
  const [modal, setModal] = useState(false);

  return modal ? (
    <div
      id="substrate"
      className={styles.substrate}
      onClick={(e) => {
        const div = e.target as HTMLDivElement;
        if (div.id === "substrate") {
          setModal(false);
        }
      }}
    >
      <ContactForm
        title="Нужна консультация?"
        subtitle="Оставьте свои данные и мы перезвоним"
        style={{
          form: styles["contact-form"],
        }}
      />
    </div>
  ) : null;
}
