export interface IUser {
    id: string;
    firstName: string;
    lastName: string;
    avatar: string;
}

export interface ITask {
    id: string;
    name: string;
    date: Date;
    description: string;
    tags: string[];
    assignees: IUser[];
}