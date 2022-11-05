import styles from "./SuperHeader.module.css";
import SuperButtonIcon from "../UI/SuperButtonIcon";
import { switchTheme } from "../utils";
import IconsNames from "../icons";

export default function SuperHeader() {
  const { menuItem, buttons, header, h1, menu } = styles;
  const { DarkMode } = IconsNames;

  return (
    <header className={[header, "row"].join(" ")}>
      <div className="col-lg-4 hidden-xs hidden-md hidden-sm p-0">
        <h1 className={h1}>Physphile's Todo</h1>
      </div>
      <div className="col-lg-4 col-xs-10 p-0">
        <menu className={menu}>
          <button className={menuItem}>Главная</button>
          <button className={menuItem}>Настройки</button>
        </menu>
      </div>
      <div className={"col-lg-4 end-xs col-xs-2 p-0 " + buttons}>
        <SuperButtonIcon iconName={DarkMode} onClick={switchTheme} />
      </div>
    </header>
  );
}
