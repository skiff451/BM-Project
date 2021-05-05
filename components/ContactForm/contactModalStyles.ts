import classNames from "classnames";
import styles from "./ContactForm.module.scss";



export default function formStyles(
  version: "light" | "dark",
  centerPos: boolean,
  inputErr: {
    nameErr: boolean;
    telErr: boolean;
  }
) {
  const nameInputStyle = classNames(styles["input"], {
    [styles.error]: inputErr.nameErr,
    [styles["input-light"]]: version === "light",
    [styles["input-dark"]]: version === "dark",
  });

  const telInputStyle = classNames(styles["input"], {
    [styles.error]: inputErr.telErr,
    [styles["input-light"]]: version === "light",
    [styles["input-dark"]]: version === "dark",
  });

  const inputStyle = classNames(styles["input"], {
    [styles["input-light"]]: version === "light",
    [styles["input-dark"]]: version === "dark",
  });

  // const shortInputStyle = classNames(styles["short-input"], {
  //   [styles["input-light"]]: version === "light",
  //   [styles["input-dark"]]: version === "dark",
  // });

  const titleStyle = classNames(styles.title, {
    [styles.light]: version === "light",
    [styles.dark]: version === "dark",
    [styles.center]: centerPos,
  });

  const subTitleStyle = classNames(styles.subtitle, {
    [styles.light]: version === "light",
    [styles.dark]: version === "dark",
    [styles.center]: centerPos,
  });

  const restrictionStyle = classNames(styles.restriction, {
    [styles.light]: version === "light",
    [styles.dark]: version === "dark",
  });

  const wrapperStyle = classNames(styles["wrapper"], {
    [styles.center]: centerPos,
  });

  return {
    nameInputStyle,
    telInputStyle,
    inputStyle,
    titleStyle,
    subTitleStyle,
    restrictionStyle,
    wrapperStyle,
  };
}
