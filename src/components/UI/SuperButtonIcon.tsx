import { MouseEventHandler } from "react";
import styles from "../../styles/UI/SuperButtonIcon.module.css";
import IconsNames from "../../utils/icons";
import { mergeClasses } from "../../utils/utils";

type Props =  {
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
}: Props) {
  const btnClass = mergeClasses(className, styles.button);
  const spanClass = mergeClasses("material-symbols-outlined", "color-inherit");

  return (
    <button
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
