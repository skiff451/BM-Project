import BlockWrapper from "../BlockWrapper";
import Item from "./WhyUsItem";

import styles from "./WhyUs.module.scss";

export default function WhyUs() {
  return (
    <div className={styles["block-wrapper"]}>
      <BlockWrapper title="Почему выбирают нас">
        <div className={styles.wrapper}>
          <Item
            text="Высокая геометрическая точность станков"
            imgName="accuracy.png"
          />
          <Item
            text="Максимум функционала за оптимальную стоимость"
            imgName="optimality.png"
          />
          <Item text="Высокая жесткость конструкции" imgName="simplicity.png" />
          <Item
            text="Простота управления всех станков"
            imgName="structural-rigidity.png"
          />
        </div>
      </BlockWrapper>
    </div>
  );
}
