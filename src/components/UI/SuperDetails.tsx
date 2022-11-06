import React, { useState } from "react";
import IconsNames from "../../utils/icons";
import SuperButtonIcon from "./SuperButtonIcon";
import { mergeClasses } from "../../utils/utils";
import styles from "../../styles/UI/SuperDetails.module.css";

interface SuperDetailsProps {
  children: React.ReactNode[];
  disabled?: boolean;
}

export default function SuperDetails({
  children,
  disabled,
}: SuperDetailsProps) {
  const { summary, details, disabledClass, expandIcon } = styles;

  const { ExpandMore } = IconsNames;
  const [expandIconStyle, setExpandIconStyle] = useState({ transform: "none" });
  const switchSummaryIcon = (): void => {
    setExpandIconStyle(
      expandIconStyle.transform === "none"
        ? { transform: "rotateX(180deg)" }
        : { transform: "none" }
    );
  };

  let expandIconClass, detailsClass: string;
  if (disabled) {
    expandIconClass = mergeClasses("high-emphasis-disabled", expandIcon);
    detailsClass = mergeClasses(details, disabledClass);
  } else {
    expandIconClass = mergeClasses("high-emphasis", expandIcon);
    detailsClass = details;
  }

  return (
    <details className={detailsClass} onToggle={switchSummaryIcon}>
      <summary className={summary}>
        <SuperButtonIcon
          iconName={ExpandMore}
          style={expandIconStyle}
          className={expandIconClass}
        />
        {children[0]}
      </summary>
      {children[1]}
    </details>
  );
}
