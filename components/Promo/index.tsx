import { useState } from "react";
import PromoCarousel from "./PromoCarousel";
import ContactFormModal from "../ContactFormModal";

import styles from "./Promo.module.scss";


export default function Promo() {
  const [openModal, setOpenModal] = useState(false)
   
  return (
    <> 
      <div className={styles.outer}>
     
        <div className={styles.inner}>
        <ContactFormModal open={openModal} setOpen={setOpenModal }/>
          <PromoCarousel openModal={setOpenModal}/>
        </div>
      </div>
     
    </>
  );
}
