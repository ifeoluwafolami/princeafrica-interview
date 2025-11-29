export type Task = {
    id: string;
    title: string;
    description: string;
    completed: boolean;
    priority: 'low' | 'medium' | 'high';
    dueDate: string;
    createdAt: string;
};

export type User = {
    id: string;
    name: string;
    email: string;
};

export type TaskStats = {
    total: number;
    completed: number;
    pending: number;
};
