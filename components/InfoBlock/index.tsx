import styles from "./InfoBlock.module.scss";

interface InfoBlockProps {
  title: string;
  infoList: string[];
}

function InfoBlock({ infoList, title }: InfoBlockProps) {
  const list = infoList.map((item, index) => {
    return <li key={index} className={styles["list-item"]}>{item}</li>;
  });

  return (
    <div className={styles["info-block"]}>
      <h4 className={styles["title"]}>{title}</h4>
      <ul className={styles["list"]}>{list}</ul>
    </div>
  );
}

export default InfoBlock;
