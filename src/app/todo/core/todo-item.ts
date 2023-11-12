export class TodoItem {
    id: number = 0;
    title: string;
    completed: boolean;

    constructor(title: string) {
        this.title = title;
        this.completed = false;
    }
}