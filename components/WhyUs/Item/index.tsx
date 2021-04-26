import styles from "./Item.module.scss";

interface ItemProps {
  title: string;
}

export default function Item({ title }: ItemProps) {
  return (
    <div className={styles.item}>
      <img className={styles["item-img"]} src="/assets/why-us-img/item.png" alt="item" />
          <p className={styles.title}>{title}</p>
    </div>
  );
}
