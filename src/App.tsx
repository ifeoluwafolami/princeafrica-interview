import { useEffect } from 'react';
import { TaskProvider, useTasks } from './context/TaskContext';
import TaskList from './components/TaskList';
import AddTaskForm from './components/AddTaskForm';
import TaskStatistics from './components/TaskStatistics';

const AppContent = () => {
  const { loadTasks, loadUser, user } = useTasks();

  useEffect(() => {
    loadTasks();
    loadUser();
  }, []);

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 to-blue-50 py-8 px-4">
      <div className="w-full px-4">
        <header className="text-center mb-8">
          <h1 className="text-6xl font-bold text-gray-800 mb-2">
            Task Manager
          </h1>
          <p className="text-gray-600">
            Welcome, {user?.name || 'Loading...'}
          </p>
        </header>

        <TaskStatistics />
        <AddTaskForm />
        <TaskList />
      </div>
    </div>
  );
};

function App() {
  return (
    <TaskProvider>
      <AppContent />
    </TaskProvider>
  );
}

export default App;
