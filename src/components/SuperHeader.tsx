import styles from "../styles/components/SuperHeader.module.css";
import SuperButtonIcon from "./UI/SuperButtonIcon";
import { mergeClasses, switchTheme } from "../utils/utils";
import IconsNames from "../utils/icons";

export default function SuperHeader() {
  const headerClass = mergeClasses("row", styles.header);

  return (
    <header className={headerClass}>
        <h1 className={styles.h1}>
            Physphile's Todo
        </h1>
        <SuperButtonIcon
            iconName={IconsNames.DarkMode}
            onClick={switchTheme}
        />
    </header>
  );
}
