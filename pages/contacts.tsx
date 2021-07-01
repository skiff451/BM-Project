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
          <a
            className={styles["map-reference"]}
            href="https://www.google.com/maps/place/%D0%9E%D0%9E%D0%9E+%22%D0%91%D0%9C+%D0%A1%D0%98%D0%A1%D0%A2%D0%95%D0%9C%D0%A1%22+-+%D0%BF%D1%80%D0%BE%D0%B8%D0%B7%D0%B2%D0%BE%D0%B4%D0%B8%D1%82%D0%B5%D0%BB%D1%8C+%D0%BF%D1%80%D0%BE%D0%BC%D1%8B%D1%88%D0%BB%D0%B5%D0%BD%D0%BD%D0%BE%D0%B3%D0%BE+%D0%BE%D0%B1%D0%BE%D1%80%D1%83%D0%B4%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F/@48.4739688,32.1979463,16z/data=!4m5!3m4!1s0x0:0x3a910742133ffbfa!8m2!3d48.4734951!4d32.1980338?hl=ru"
          >
            <img
              src={`https://maps.googleapis.com/maps/api/staticmap?&markers=size:mid%7Ccolor:red%7C48.4739688,32.1979463&zoom=15&size=734x307&key=AIzaSyB8f5gZ04auwtMWFzI0sOFrlRJ1gjqXHTg`}
              alt="map"
              width="734"
              height="307"
            />
          </a>
        </div>
      </BlockWrapper>
    </MainLayout>
  );
}



export default Contacts;
