import React, { useRef, useState } from "react";
import IconsNames from "../../utils/icons";
import SuperButtonIcon from "./SuperButtonIcon";
import { mergeClasses } from "../../utils/utils";
import styles from "../../styles/UI/SuperDetails.module.css";

type Props =  {
  children: React.ReactNode[];
  disabled?: boolean;
}

export default function SuperDetails({children, disabled}: Props) {
  const { summary, details, disabledClass, expandIcon } = styles;

  const [expandIconStyle, setExpandIconStyle] = useState({ transform: "none" });
  const switchSummaryIcon = (): void => {
    setExpandIconStyle(
      expandIconStyle.transform === "none"
        ? { transform: "rotateX(180deg)" }
        : { transform: "none" }
    );
  };

  const expandIconClass = mergeClasses(disabled ? "high-emphasis-disabled" : "high-emphasis", expandIcon);
  const detailsClass = mergeClasses(disabled ? disabledClass : "", details);

  const detailsRef = useRef(null);
  const toggleOpen = () => {
    if (detailsRef.current) {
      const details = detailsRef.current as HTMLDetailsElement;
      const open = details.getAttribute("open");
      if (open === "") details.removeAttribute("open");
      else details.setAttribute("open", ""); 
    }
  }

  return (
    <details
        className={detailsClass}
        onToggle={switchSummaryIcon}
        ref={detailsRef}
    >
      <summary className={summary}>
        <SuperButtonIcon
          iconName={IconsNames.ExpandMore}
          style={expandIconStyle}
          className={expandIconClass}
          onClick={toggleOpen}
        />
        {children[0]}
      </summary>
      {children[1]}
    </details>
  );
}
