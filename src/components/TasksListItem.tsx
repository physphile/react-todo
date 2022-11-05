import Task from '../models';
import SuperButtonIcon from '../UI/SuperButtonIcon';
import { useRecoilState } from 'recoil';
import storeTasksList from '../store/tasksList';
import { useState } from 'react';
import styles from './TasksListItem.module.css';
import { IconsNames } from '../utils';

interface TasksListItemProps {
  task: Task;
}

export default function TasksListItem({ task }: TasksListItemProps) {
  console.log(styles);

  const [tasksList, setTasksList] = useRecoilState<Task[]>(storeTasksList);
  const deleteTask = (id: number): void => {
    setTasksList(tasksList.filter((task) => task.id !== id));
  };

  const { expandMore, expandLess, deleteIcon } = IconsNames;
  const [summaryIcon, setSummaryIcon] = useState(expandMore);
  const switchSummaryIcon = (): void => {
    const newSummaryIcon = summaryIcon === expandMore ? expandLess : expandMore;
    setSummaryIcon(newSummaryIcon);
  };

  return (
    <details>
      <summary onClick={switchSummaryIcon}>
        <SuperButtonIcon
          iconName={summaryIcon}
          className="no-pointer-events high-emphasis"
        />
        <h3 className="tasks-list-item-title">{task.title}</h3>
        <SuperButtonIcon
          iconName={deleteIcon}
          onClick={() => deleteTask(task.id)}
          className="helper"
        />
      </summary>
      <table>
        <tr>
          <td>Created:</td>
          <td>22.10.2022 14:58</td>
        </tr>
        <tr>
          <td>Done:</td>
          <td>28.10.2022 20:22</td>
        </tr>
      </table>
    </details>
  );
}
