import BlockWrapper from "../components/BlockWrapper";
import MainLayout from "../components/MainLayout";

import styles from "../styles/Contacts.module.scss";

function Contacts() {
  return (
    <MainLayout>
      <BlockWrapper title="Контакты">
        <div className={styles["wrapper"]}>
          <div className={styles["contacts-wrapper"]}>
            <span className={styles["contact-item"]}>
              <img
                src="/assets/contacts-img/orange-location.svg"
                alt="location-img"
              />
              <span>
                пер. Соколовский, с. Соколовское, обл. Кировоградская, Украина,
                27641
              </span>
            </span>

            <span className={styles["contact-item"]}>
              <img src="/assets/contacts-img/orange-mail.svg" alt="mail-img" />
              <span>Office@bmprom.com</span>
            </span>

            <span className={styles["contact-item"]}>
              <img
                src="/assets/contacts-img/orange-tel.svg"
                alt="telephone-img"
              />
              <span>+380667528540 </span>
            </span>
          </div>
        </div>
      </BlockWrapper>
    </MainLayout>
  );
}

export default Contacts;
