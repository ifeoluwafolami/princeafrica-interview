import React from 'react';
import type { Task } from '../types';

interface TaskCardProps {
    task: Task;
    onToggle: (id: string) => void;
    onDelete: (id: string) => void;
}

const TaskCard: React.FC<TaskCardProps> = React.memo(({ task, onToggle, onDelete }) => {
    const priorityColors = {
        low: 'bg-emerald-100 text-emerald-800 border-emerald-300',
        medium: 'bg-amber-100 text-amber-800 border-amber-300',
        high: 'bg-rose-100 text-rose-800 border-rose-300',
    };

    return (
        <div className="bg-white rounded-lg shadow-sm p-2 border border-slate-200 hover:shadow-md hover:border-slate-300 transition-all duration-200 relative z-10 w-full max-w-5xl mx-auto">
            <div className="flex items-start justify-between">
                <div className="flex items-start gap-2 md:gap-3 flex-1">
                    <input
                        type="checkbox"
                        checked={task.completed}
                        onChange={() => onToggle(task.id)}
                        className="mt-1 h-5 w-5 rounded border-gray-300"
                        aria-label={`Mark "${task.title}" as ${task.completed ? 'incomplete' : 'complete'}`}
                    />
                    <div className="flex-1">
                        <h3 className={`${task.title.length > 12 ? 'text-lg md:text-xl' : 'text-xl md:text-2xl'} font-semibold ${task.completed ? 'line-through text-gray-400' : 'text-gray-800'} capitalize`}>
                            {task.title}
                        </h3>
                        <p className="text-xs md:text-sm text-gray-600 mt-1">{task.description}</p>
                        <div className="flex gap-2 mt-3">
                            <span className={`text-xs px-2 rounded-full flex justify-center items-center border ${priorityColors[task.priority]}`}>
                                {task.priority}
                            </span>
                            <span className="text-xs px-2 py-1 rounded-full bg-slate-100 text-slate-600">
                                Due: {new Date(task.dueDate).toLocaleDateString()}
                            </span>
                        </div>
                    </div>
                </div>

                <div
                    onClick={() => onDelete(task.id)}
                    className="text-rose-500 hover:text-rose-700 cursor-pointer ml-2 text-xl"
                >
                    ✕
                </div>
            </div>
        </div>
    );
});

TaskCard.displayName = 'TaskCard';

export default TaskCard;
