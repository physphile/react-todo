import { MouseEventHandler } from "react";
import styles from "./SuperButtonIcon.module.css";
import IconsNames from "../icons";

interface SuperButtonIconProps {
  iconName: IconsNames;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  className?: string;
}

export default function SuperButtonIcon({
  iconName,
  onClick = () => {},
  className = "",
}: SuperButtonIconProps) {
  const { button } = styles;

  return (
    <button onClick={onClick} className={[className, button].join(" ")}>
      <span className="material-symbols-outlined" style={{ color: "inherit" }}>
        {iconName}
      </span>
    </button>
  );
}
