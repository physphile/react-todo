interface ITask {
  id?: number;
  title: string;
  completed?: boolean;
  creationDate?: number;
  completionDate?: number;
  tags?: string[];
}

export default class Task {
  readonly id: number;
  readonly creationDate: Date;

  constructor(task: ITask) {
    this._title = task.title;

    if (task.id) this.id = task.id;
    else this.id = createId();

    if (typeof task.completed === "boolean") this._completed = task.completed;
    else this._completed = false;

    if (task.creationDate) this.creationDate = new Date(task.creationDate);
    else this.creationDate = new Date();

    if (this._completed && task.completionDate)
      this._completionDate = new Date(task.completionDate);
    else if (this._completed) this._completionDate = new Date();

    if (task.tags) {
      this._tags = task.tags;
    } else this._tags = [];
  }

  private _title: string;
  private _tags: Array<string>;

  get title(): string {
    return this._title;
  }

  get tags(): string[] {
    return this._tags;
  }

  set title(value: string) {
    this._title = value;
  }

  setTitle(title: string) {
    this._title = title;
    return this;
  }

  setTags(tags: string[]) {
    this._tags = tags;
    return this;
  }

  addTag(tag: string) {
    if (!this._tags.find(t => t === tag)) {
      this._tags.push(tag);
    }
    return this;
  }

  removeTag(tag: string) {
    this._tags = this._tags.filter(t => t !== tag);
    return this;
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
    return this;
  }

  undone() {
    this._completed = false;
    this._completionDate = undefined;
    return this;
  }

  toString() {
    return JSON.stringify(this.get());
  }

  get(): ITask {
    return {
      id: this.id,
      title: this._title,
      completed: this._completed,
      creationDate: this.creationDate.getTime(),
      completionDate: this._completionDate?.getTime(),
      tags: this._tags
    }
  }

  static parse(tasks: string) {
    return JSON.parse(tasks).map((task: any) => new Task(task))
  }
}

function createId() {
  return Math.round(Math.random() * Number.MAX_SAFE_INTEGER);
}
