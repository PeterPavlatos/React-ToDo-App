import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import TaskList from './components/TaskList';
import AuthContextProvider from './contexts/AuthContext';
import TaskContextProvider from './contexts/TaskContext';
import NewTaskForm from './components/TaskForm';
import ToggleFormContextProvider from './contexts/ThemeContxt';

function App() {
  return (
    <div className="App">
        <AuthContextProvider>
          <TaskContextProvider>
            <Navbar />
            <TaskList />
            <ToggleFormContextProvider>
              <NewTaskForm />
            </ToggleFormContextProvider>
          </TaskContextProvider>
        </AuthContextProvider>
    </div>
  );
}

export default App;
