import {ReactNode} from "react";
import styles from "../../styles/UI/SuperButtonGroup.module.css"
import {mergeClasses} from "../../utils/utils";

type Props = {
    children: ReactNode[];
    className: string
}

export default function SuperButtonGroup({children, className}: Props) {
    return (
        <div className={mergeClasses(styles.group, className)}>
            {children}
        </div>
    )
}