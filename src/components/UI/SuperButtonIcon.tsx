import { MouseEventHandler } from "react";
import styles from "../../styles/UI/SuperButtonIcon.module.css";
import IconsNames from "../../utils/icons";
import { mergeClasses } from "../../utils/utils";

interface SuperButtonIconProps {
  iconName: IconsNames;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  className?: string;
  style?: object;
}

export default function SuperButtonIcon({
  iconName,
  onClick = () => {},
  className = "",
  style,
}: SuperButtonIconProps) {
  const { button } = styles;

  const btnClass = mergeClasses(className, button);
  const spanClass = mergeClasses("material-symbols-outlined", "color-inherit");

  return (
    <button onClick={onClick} className={btnClass} style={style}>
      <span className={spanClass}>{iconName}</span>
    </button>
  );
}
