import { useRouter } from "next/router";
import Link from "next/link";

import styles from "./DynamicNavigation.module.scss";

interface IDynamicNavigationProps {
  routs: string[];
}

function DynamicNavigation({ routs }: IDynamicNavigationProps) {
  const router = useRouter();

  const navigation = routs.map((rout, index) => {
    if (index === 0) {
      return (
        <span key={index}>
          <Link href={"/"}>
            <a>
              <span className={styles.active}>{rout}</span>
            </a>
          </Link>
          <span className={styles.arrow}>⟶</span>
        </span>
      );
    } else if (index === routs.length - 1) {
      return (
        <span key={index} className={styles.inactive}>
          {rout}
        </span>
      );
    } else {
      const paths = router.asPath.split("/");
      paths.pop();
      const prevPath = paths.join("/");
      return (
        <span key={index}>
          <Link href={prevPath}>
            <a>
              <span className={styles.active}>{rout}</span>
            </a>
          </Link>
          <span className={styles.arrow}>⟶</span>
        </span>
      );
    }
  });

  return (
    <div className={styles.container}>
      <div className={styles.nav}>{navigation}</div>
    </div>
  );
}

export default DynamicNavigation;
