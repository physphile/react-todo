import styles from "../styles/components/SuperHeader.module.css";
import SuperButtonIcon from "./UI/SuperButtonIcon";
import { mergeClasses, switchTheme } from "../utils/utils";
import IconsNames from "../utils/icons";

export default function SuperHeader() {
  const { menuItem, buttons, header, h1, menu } = styles;
  const { DarkMode } = IconsNames;

  const buttonsClass = mergeClasses("col-lg-4 end-xs col-xs-2 p-0", buttons);
  const headerClass = mergeClasses("row", header);

  return (
    <header className={headerClass}>
      <div className="col-lg-4 hidden-xs hidden-md hidden-sm p-0">
        <h1 className={h1}>Physphile's Todo</h1>
      </div>
      <div className="col-lg-4 col-xs-10 p-0">
        <menu className={menu}>
          <button className={menuItem}>Home</button>
          <button className={menuItem}>Settings</button>
        </menu>
      </div>
      <div className={buttonsClass}>
        <SuperButtonIcon iconName={DarkMode} onClick={switchTheme} />
      </div>
    </header>
  );
}
