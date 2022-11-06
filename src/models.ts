interface ITask {
  id?: number;
  title: string;
  completed?: boolean;
  creationDate?: Date;
  completionDate?: Date;
}

export default class Task {
  readonly id: number;
  readonly creationDate: Date;
  readonly title: string;

  constructor(task: ITask) {
    this.title = task.title;

    if (task.id) this.id = task.id;
    else this.id = createId();

    if (typeof task.completed === "boolean") this._completed = task.completed;
    else this._completed = false;

    if (task.creationDate) this.creationDate = task.creationDate;
    else this.creationDate = new Date();

    if (this._completed && task.completionDate)
      this._completionDate = task.completionDate;
    else if (this._completed) this._completionDate = new Date();
  }

  private _completed: boolean;

  get completed(): boolean {
    return this._completed;
  }

  private _completionDate: Date | undefined;

  get completionDate(): Date | undefined {
    return this._completionDate;
  }

  set completionDate(value: Date | undefined) {
    this._completionDate = value;
  }

  done() {
    this._completed = true;
    this._completionDate = new Date();
  }

  undone() {
    this._completed = false;
    this._completionDate = undefined;
  }

  get(): ITask {
    return {
      title: this.title,
      id: this.id,
      completed: this._completed,
      completionDate: this._completionDate,
      creationDate: this.creationDate,
    };
  }
}

function createId() {
  return Math.round(Math.random() * Number.MAX_SAFE_INTEGER);
}
