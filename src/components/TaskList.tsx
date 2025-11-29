import React, { useState } from 'react';
import TaskCard from './TaskCard';
import { useTasks } from '../context/TaskContext';
import { useSearch } from '../hooks/useSearch';

const TaskList: React.FC = () => {
    const { tasks, deleteTask, toggleTask } = useTasks();
    const { searchResults, searching, search } = useSearch();
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        const query = e.target.value;
        setSearchQuery(query);
        search(query);
    };

    const displayTasks = searchQuery.trim() ? searchResults : tasks;

    const handleToggle = (id: string) => {
        toggleTask(id);
    };

    const handleDelete = (id: string) => {
        deleteTask(id);
    };

    return (
        <div className="w-full">
            <div className="mb-6 relative z-20">
                <input
                    type="text"
                    placeholder="Search tasks..."
                    value={searchQuery}
                    onChange={handleSearch}
                    className="w-full px-4 py-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {searching && (
                    <div className="absolute right-3 top-3 text-gray-400">
                        Searching...
                    </div>
                )}
            </div>

            {displayTasks.length === 0 ? (
                <div className="text-center py-12 text-gray-500">
                    {searchQuery ? 'No tasks found' : 'No tasks yet. Add one to get started!'}
                </div>
            ) : (
                <div className="space-y-4 flex flex-col justify-center items-center">
                    {displayTasks.map((task) => (
                        <TaskCard
                            key={task.id}
                            task={task}
                            onToggle={handleToggle}
                            onDelete={handleDelete}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default TaskList;
