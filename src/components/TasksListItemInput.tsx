import SuperButtonIcon from "./UI/SuperButtonIcon";
import styles from "../styles/components/TasksListItemInput.module.css";
import {useEffect, useRef, useState} from "react";
import IconsNames from "../utils/icons";
import {mergeClasses} from "../utils/utils";
import Task from "../models";
import {useTasks} from "../hooks/TasksList";
import {useEditContext} from "../hooks/EditContext";

type Props = {
    task: Task;
}

export default function TasksListItemInput ({task}: Props) {
    const inputRef = useRef(null);
    const [newTitle, setNewTitle] = useState(task.title);
    const {isEditing, start, end} = useEditContext();
    const [editIcon, setEditIcon] = useState(IconsNames.Edit);
    const [disabled, setDisabled] = useState(true);
    const {setTitle} = useTasks();

    const titleClass = mergeClasses(task.completed ? "strikethrough text-disabled" : "", styles.title);

    const endEdit = () => {
        end();
        const input = inputRef.current! as HTMLInputElement;
        input.setSelectionRange(0, 0);
        setDisabled(true);
        setEditIcon(IconsNames.Edit);
        setTitle(task.id, newTitle);
    };

    const startEdit = () => {
        start();
        setDisabled(false);
        setEditIcon(IconsNames.DoneOutline);
    }

    const iconClick = () => {
        if (editIcon === IconsNames.DoneOutline) endEdit()
        else if (editIcon === IconsNames.Edit && !isEditing) startEdit()
    }

    useEffect(() => {
        if (!disabled) {
            const input = inputRef.current! as HTMLInputElement;
            input.focus();
            input.setSelectionRange(newTitle.length, newTitle.length);
        }
    }, [disabled])

    return (
        <form
            onSubmit={e => e.preventDefault()}
            className={styles.form}
        >
            <input
                type="text"
                ref={inputRef}
                value={newTitle}
                disabled={disabled}
                onChange={(e) => setNewTitle(e.target.value)}
                className={titleClass}
            />
            <SuperButtonIcon
                iconName={editIcon}
                onClick={iconClick}
                className={styles.edit}
            />
        </form>
    )
}