import React, { createContext, useContext, useEffect, useState } from 'react';
import type { ReactNode } from 'react';
import type { Task, User } from '../types';
import { mockApi } from '../mockApi';

interface TaskContextType {
    tasks: Task[];
    user: User | null;
    loading: boolean;
    addTask: (task: Omit<Task, 'id' | 'createdAt'>) => Promise<void>;
    deleteTask: (id: string) => Promise<void>;
    toggleTask: (id: string) => Promise<void>;
    loadTasks: () => Promise<void>;
    loadUser: () => Promise<void>;
}

const TaskContext = createContext<TaskContextType | undefined>(undefined);

export const TaskProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(false);

    const loadTasks = async () => {
        setLoading(true);
        try {
            const fetchedTasks = await mockApi.getTasks();
            setTasks(fetchedTasks);
            console.log(fetchedTasks);
        } catch (error) {
            console.error('Failed to load tasks:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(
        () => {
            // setLoading(true);
            // try {
            //     const fetchedTasks = await mockApi.getTasks();
            //     const taskList = [...fetchedTasks, ]
            // } catch (error) {
                
            // }
        }, [tasks]
    );

    const loadUser = async () => {
        try {
            const fetchedUser = await mockApi.getUser();
            setUser(fetchedUser);
        } catch (error) {
            console.error('Failed to load user:', error);
        }
    };

    const addTask = async (taskData: Omit<Task, 'id' | 'createdAt'>) => {
        try {
            const newTask = await mockApi.addTask(taskData);
            tasks.push(newTask);
            setTasks(tasks);
        } catch (error) {
            console.error('Failed to add task:', error);
        }
    };

    const deleteTask = async (id: string) => {
        try {
            await mockApi.deleteTask(id);
            setTasks(tasks.filter((task) => task.id !== id));
        } catch (error) {
            console.error('Failed to delete task:', error);
        }
    };

    const toggleTask = async (id: string) => {
        try {
            await mockApi.toggleTask(id);
            setTasks(
                tasks.map((task) =>
                    task.id === id ? { ...task, completed: !task.completed } : task
                )
            );
        } catch (error) {
            console.error('Failed to toggle task:', error);
        }
    };

    return (
        <TaskContext.Provider
            value={{
                tasks,
                user,
                loading,
                addTask,
                deleteTask,
                toggleTask,
                loadTasks,
                loadUser,
            }}
        >
            {children}
        </TaskContext.Provider>
    );
};

export const useTasks = () => {
    const context = useContext(TaskContext);
    if (!context) {
        throw new Error('useTasks must be used within TaskProvider');
    }
    return context;
};
