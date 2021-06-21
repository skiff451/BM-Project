import React from "react";
import BlockWrapper from "../BlockWrapper";
import styles from "./CuttingModesTable.module.scss";

interface CuttingModesTableProps {
  cuttingModesData: string[][];
  title: string;
  description: string[];
}

function CuttingModesTable({
  cuttingModesData,
  title,
  description,
}: CuttingModesTableProps) {
  const table = cuttingModesData.map((columnItems, i) => {
    const columnCells = columnItems.map((cellData, index) => {
      if (cellData.match(/\*/)?.length) {
        const val = cellData.split("*")[1];
        return (
          <div key={index} className={styles.cell}>
            <span className={styles.colored}>{val}</span>
          </div>
        );
      }
      return (
        <div key={index} className={styles.cell}>
          {cellData}
        </div>
      );
    });

    return (
      <div key={i} className={styles.column}>
        {columnCells}
      </div>
    );
  });

  return (
    <BlockWrapper title={title}>
      <div className={styles.table}>{table}</div>
      <p>{description[0]}</p>
      <p className={styles.colored}> {description[1]}</p>
    </BlockWrapper>
  );
}

export default CuttingModesTable;
