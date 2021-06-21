import classNames from "classnames";
import { useEffect, useState } from "react";
import initActiveTitles from "./initActiveTitles";
import styles from "./SpecificationTitles.module.scss";

interface SpecificationTitlesProps {
  specificationsData: IMachineSpecification[];
  getCurrentSpecification: (currentSpecification: IMachineSpecification) => void;
}

function SpecificationTitles({
  specificationsData,
  getCurrentSpecification,
}: SpecificationTitlesProps) {
  
  const [activeSpecification, setActiveSpecification] = useState(
    specificationsData[0]
  );

  useEffect(() => {
    getCurrentSpecification(activeSpecification);
  }, [activeSpecification]);
  
  const [activeTitleItems, setActiveTitleItems] = useState(initActiveTitles(specificationsData));

  const specificationsTitles = specificationsData.map(
    (specificationItem, index) => {
     
      const titleStyle = classNames(styles["specifications-title"], {
        [styles.active]:
          activeTitleItems[index].id === specificationItem.id &&
          activeTitleItems[index].active === true,
      });

      return (
        <div
          key={specificationItem.id}
          className={titleStyle}
          onClick={() => {
            const changedActiveTitleItems = activeTitleItems.map(
              (activeItem) => {
                if (activeItem.id === specificationItem.id) {
                  return { ...activeItem, active: true };
                } else {
                  return { ...activeItem, active: false };
                }
              }
            );
            setActiveTitleItems(changedActiveTitleItems);

            const curSpecification = specificationsData.find(
              (item) => item.id === specificationItem.id
            );
            if (curSpecification !== undefined) {
              setActiveSpecification(curSpecification);
            }
          }}
        >
          {specificationItem.name}
        </div>
      );
    }
  );

  return (
    <div className={styles["specifications-wrapper"]}>
      {specificationsTitles}
    </div>
  );
}

export default SpecificationTitles;
