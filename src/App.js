import { useState } from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Feed the Dogs',
      date: 'Oct 25, 2023 at 7:00 AM',
      reminder: true,
    },
    {
      id: 2,
      text: 'Get Rich',
      date: 'Dec 02, 2023 at 1:00 AM',
      reminder: true,
    },
    {
      id: 3,
      text: 'Die Trying',
      date: 'Dec 02, 2024 at 1:00 AM',
      reminder: true,
    },
  ]);

  //Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  //Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  return (
    <div className="container">
      <Header />
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        'No Tasks Added'
      )}
    </div>
  );
};

export default App;
