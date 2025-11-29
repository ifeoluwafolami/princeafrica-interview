import type { Task, User } from './types';
const randomDelay = () => Math.floor(Math.random() * 1000) + 500;

const INITIAL_TASKS: Task[] = [
    {
        id: '1',
        title: 'Review pull requests',
        description: 'Review pending PRs from the team',
        completed: false,
        priority: 'high',
        dueDate: '2025-11-27',
        createdAt: '2025-11-25T10:00:00Z',
    },
    {
        id: '2',
        title: 'Update documentation',
        description: 'Add API documentation for new endpoints',
        completed: true,
        priority: 'medium',
        dueDate: '2025-11-26',
        createdAt: '2025-11-24T14:30:00Z',
    },
    {
        id: '3',
        title: 'Fix authentication bug',
        description: 'Users cannot log in with social providers',
        completed: false,
        priority: 'high',
        dueDate: '2025-11-26',
        createdAt: '2025-11-25T09:15:00Z',
    },
];

const MOCK_USER: User = {
    id: '1',
    name: 'Jane Developer', 
    email: 'jane@example.com',
};

export const mockApi = {
    getTasks: (): Promise<Task[]> => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(INITIAL_TASKS);
            }, randomDelay());
        });
    },

    searchTasks: (query: string): Promise<Task[]> => {
        return new Promise((resolve) => {
            setTimeout(() => {
                const filtered = INITIAL_TASKS.filter(
                    (task) =>
                        task.title.toLowerCase().includes(query.toLowerCase()) ||
                        task.description.toLowerCase().includes(query.toLowerCase())
                );
                resolve(filtered);
            }, randomDelay());
        });
    },

    getUser: (): Promise<User> => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(MOCK_USER as User);
            }, 300);
        });
    },

    addTask: (task: Omit<Task, 'id' | 'createdAt'>): Promise<Task> => {
        return new Promise((resolve) => {
            setTimeout(() => {
                const newTask: Task = {
                    ...task,
                    id: Date.now().toString(),
                    createdAt: new Date().toISOString(),
                };
                resolve(newTask);
            }, 500);
        });
    },

    deleteTask: (id: string): Promise<Task> => {
        return new Promise((resolve) => {
            setTimeout(() => {
                const task: Task[] = INITIAL_TASKS.filter((task) => task.id === id);
                resolve(task[0]);
            }, 300);
        });
    },

    toggleTask: (id: string): Promise<Task> => {
        return new Promise((resolve) => {
            setTimeout(() => {
                const task: Task[] = INITIAL_TASKS.filter((task) => task.id === id);
                resolve(task[0]);
            }, 300);
        });
    },
};
