import Image from "next/image";
import styles from "./Contacts.module.scss";

interface ContactsProps {
  tel: string;
  mail: string;
  horizontal?: boolean;
  iconSrc: {
    tel: string;
    mail: string;
  };
}

export default function Contacts(props: ContactsProps) {
  const { tel, mail, horizontal, iconSrc } = props;

  return (
    <div className={horizontal ? styles.contactsH : styles.contactsV}>
      <div className={styles.tel}>
        <>
          <img
            className="ico-tel"
            src={iconSrc.tel}
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
            src={iconSrc.mail}
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
