import styles from './SuperHeader.module.css';
import SuperButtonIcon from '../UI/SuperButtonIcon';
import { IconsNames, switchTheme } from '../utils';

export default function SuperHeader() {
  const { menuItem, buttons } = styles;
  const { darkMode } = IconsNames;

  return (
    <header>
      <div className="col-lg-4 hidden-xs hidden-md hidden-sm">
        <h1>Physphile's Todo</h1>
      </div>
      <div className="col-lg-4 col-xs-10">
        <menu>
          <button className={menuItem}>Главная</button>
          <button className={menuItem}>Настройки</button>
        </menu>
      </div>
      <div className={'col-lg-4 end-xs col-xs-2 ' + buttons}>
        <SuperButtonIcon iconName={darkMode} onClick={switchTheme} />
      </div>
    </header>
  );
}
