import { MouseEventHandler } from "react";
import styles from "../../styles/UI/SuperButtonIcon.module.css";
import IconsNames from "../../utils/icons";
import { mergeClasses } from "../../utils/utils";

type Props =  {
  iconName: IconsNames;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  className?: string;
  style?: object;
  type?: "button" | "submit" | "reset" | undefined
}

export default function SuperButtonIcon({
  iconName,
  onClick = () => {},
  className = "",
  style,
  type
}: Props) {
  const btnClass = mergeClasses(className, styles.button);
  const spanClass = mergeClasses("material-symbols-outlined", "color-inherit");

  return (
    <button
        type={type}
        onClick={onClick}
        className={btnClass}
        style={style}
    >
      <span className={spanClass}>
        {iconName}
      </span>
    </button>
  );
}
