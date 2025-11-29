import { useEffect, useState } from 'react';
import { useTasks } from '../context/TaskContext';
import type { TaskStats } from '../types';

const TaskStatistics = () => {
    const { tasks } = useTasks();
    const [stats, setStats] = useState<TaskStats>({ total: 0, completed: 0, pending: 0 });

    useEffect(() => {
        const newStats = {
            total: tasks.length,
            completed: tasks.filter((t) => t.completed).length,
            pending: tasks.filter((t) => !t.completed).length,
        };
        setStats(newStats);
    }, [tasks, stats]); 

    return (
        <div className="w-full mb-6">
            <div className="bg-linear-to-r from-blue-600 to-indigo-700 rounded-lg shadow-lg p-6 text-white">
                <h2 className="text-4xl font-bold mb-4 text-center">Task Statistics</h2>
                <div className="flex gap-2 md:gap-4 justify-center items-center ">
                    <div className="flex flex-col justify-center items-center text-center p-2 md:p-4 md:py-6 w-[32%] h-20 md:w-[10%]">
                        <div className="text-4xl md:text-6xl font-bold">{stats.total}
                            
                        </div>
                        <div className="text-xs md:text-sm opacity-90">Total</div>
                    </div>
                    <div className="flex flex-col justify-center items-center p-2 md:p-4 md:py-6 w-[32%] h-20 md:w-[10%]">
                        <div className="text-4xl md:text-6xl font-bold">{stats.completed}</div>
                        <div className="text-xs md:text-sm opacity-90">Completed</div>
                    </div>
                    <div className="flex flex-col justify-center items-center p-2 md:p-4 md:py-6 w-[32%] h-20 md:w-[10%]">
                        <div className="text-4xl md:text-6xl font-bold">{stats.pending}</div>
                        <div className="text-xs md:text-sm opacity-90">Pending</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TaskStatistics;
