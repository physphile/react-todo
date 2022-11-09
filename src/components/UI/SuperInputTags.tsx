import {useState, useEffect, useRef} from "react"
import { useEditContext } from "../../hooks/EditContext";
import { useTasks } from "../../hooks/TasksList";
import Task from "../../models";
import styles from "../../styles/UI/SuperInputTags.module.css"
import { mergeClasses } from "../../utils/utils";
import SuperInputTagsItem from "./SuperInputTagsItem";

type Props = {
    task: Task;
}

export default function SuperInputTags({task}: Props) {
    const [tagName, setTagName] = useState("");
    const {addTag} = useTasks();
    const {isEditing} = useEditContext()

    const inputRef = useRef(null);

    useEffect(() => {
        if (inputRef.current && tagName[tagName.length - 1] === " " && tagName.trim() !== "") {
            addTag(task.id, tagName);
            setTagName("");
        }
    }, [tagName])

    const containerClass = mergeClasses(styles.container, isEditing ? styles.active : styles.disabled);
    return (
        <div className={containerClass}>
            {task.tags.length === 0 && !isEditing && <p>No tags</p>}
            {task.tags.length === 0 && isEditing && <p>Add new tags:</p>}
                {task.tags.map(tag => (
                    <SuperInputTagsItem 
                        key={tag} 
                        tag={tag}
                        id={task.id}
                    />
                ))}
            <input 
                disabled={!isEditing}
                type="text" 
                ref = {inputRef}
                className={styles.input}
                value={tagName} 
                onChange={(e) => setTagName(e.target.value)}
            />
        </div>    
    )
}