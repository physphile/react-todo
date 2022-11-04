import {MouseEventHandler} from "react";
import "./SuperButtonIcon.css"

interface SuperButtonIconProps {
    iconName: string,
    onClick?: MouseEventHandler<HTMLButtonElement>,
    className?: string
}

export default function SuperButtonIcon({iconName, onClick = () => {}, className = ""}: SuperButtonIconProps) {
    return (
        <button onClick={onClick} className={className + " super-button"}>
             <span className="material-symbols-outlined" style={{color: "inherit"}}>
                    {iconName}
                </span>
        </button>
    )
}
