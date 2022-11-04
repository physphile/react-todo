import "./SuperHeader.css"
import SuperButtonIcon from "../UI/SuperButtonIcon";

export default function SuperHeader() {
    const switchTheme = () => {
        const currentTheme = document.documentElement.getAttribute('theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('theme', newTheme);
    }
    return (
        <header className="super-header">
            <div className="col-lg-4 hidden-xs hidden-md hidden-sm">
                <h1 className="super-header-title">Physphile's Todo</h1>
            </div>
            <div className="col-lg-4 col-xs-10">
                <menu className="super-header-menu">
                    <button className="super-header-menu-item">Главная</button>
                    <button className="super-header-menu-item">Настройки</button>
                </menu>
            </div>
            <div className="col-lg-4 end-xs col-xs-2 super-header-buttons">
                <SuperButtonIcon iconName="dark_mode" onClick={switchTheme}/>
            </div>

        </header>
    )
}