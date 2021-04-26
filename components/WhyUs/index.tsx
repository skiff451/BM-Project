import Wrapper from "../BlockWrapper";
import Item from "./Item";

import styles from "./WhyUs.module.scss";

export default function WhyUs() {
  return (
    <Wrapper title="Почему выбирают нас">
      <div className={styles.box}>
        <Item title="Высокая геометрическая точность станков" />
        <Item title="Высокая жесткость конструкции" />
        <Item title="Максимум функционала за оптимальную стоимость" />
        <Item title="Простота управления всех станков" />
      </div>
    </Wrapper>
  );
}
