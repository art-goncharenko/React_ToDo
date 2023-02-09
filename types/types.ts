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
    status: string;
    order: number;
}

export interface IStatus {
    id: string;
    name: string;
    order: number;
}