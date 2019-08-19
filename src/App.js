import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import TaskList from './components/TaskList';
import AuthContextProvider from './contexts/AuthContext';
import TaskContextProvider from './contexts/TaskContext';
import NewTaskForm from './components/TaskForm';

function App() {
  return (
    <div className="App">
        <AuthContextProvider>
          <TaskContextProvider>
            <Navbar />
            <TaskList />
            <NewTaskForm />
          </TaskContextProvider>
        </AuthContextProvider>
    </div>
  );
}

export default App;
