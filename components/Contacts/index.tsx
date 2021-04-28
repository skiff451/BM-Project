import Image from "next/image";
import styles from "./Contacts.module.scss";

interface ContactsProps {
  tel: string;
  mail: string;
  horizontal?: boolean;
}

export default function Contacts(props: ContactsProps) {
  const { tel, mail, horizontal } = props;
  return (
    <div className={horizontal ? styles.contactsH : styles.contactsV}>
      <div className={styles.tel}>
        <>
          <img
            className="ico-tel"
            src="/assets/contacts-img/tel-img.svg"
            alt="tel"
            width={20}
            height={20}
          />
          <style jsx>{`
            .ico-tel {
              width: 1.389vw;
              height: 1.389vw;
            }
          `}</style>
        </>
        <a className={styles.contactItem} href={`tel:${tel}`}>
          {tel}
        </a>
      </div>
      <div className={styles.mail}>
        <>
          <img
            className="ico-mail"
            src="/assets/contacts-img/mail-img.svg"
            alt="mail"
            width={20}
            height={16}
          />
          <style jsx>{`
            .ico-mail {
              width: 1.389vw;
              height: 1.111vw;
            }
          `}</style>
        </>
        <a className={styles.contactItem} href={`mailto:${mail}`}>
          {mail}
        </a>
      </div>
    </div>
  );
}
