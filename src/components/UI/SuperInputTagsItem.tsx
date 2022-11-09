import { useMemo } from "react";
import { useEditContext } from "../../hooks/EditContext";
import { useTasks } from "../../hooks/TasksList";
import styles from "../../styles/UI/SuperInputTagsItem.module.css"

type Props = {
    tag: string,
    id: number,
}

export default function SuperInputTagsItem ({tag, id}: Props){
    const {removeTag} = useTasks();
    const {isEditing} = useEditContext();
    const color = useMemo(() => "#" + Math.round(Math.random() * 16777215).toString(16), []);
    return (
        <div className={styles.tag} style={{borderColor: color}}>
            <div style={{backgroundColor: color}}></div>
            <p>{tag}</p>
            {isEditing &&<span onClick={() => removeTag(id, tag)}>
                &#0215;
            </span>}
        </div>    
    )
}