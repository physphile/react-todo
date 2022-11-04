import {MouseEventHandler} from "react";
import "./SuperButtonIcon.css"

interface SuperButtonIconProps {
    iconName: string,
    onClick: MouseEventHandler<HTMLButtonElement>
}

export default function SuperButtonIcon({iconName, onClick}: SuperButtonIconProps) {
    return (
        <button onClick={onClick} className="super-button">
             <span className="material-symbols-outlined" >
                    {iconName}
                </span>
        </button>
    )
}
