import React, { createContext, useState } from 'react';
import uuid from 'uuid/v1';

export const TaskContext = createContext();

const TaskContextProvider = (props) => {
    const [tasks, setTasks] = useState([
        {title: 'Bring kids to school', user: "Peter", id: 1},
        {title: 'Buy present for birthday', user: "Peter", id: 2},
        {title: 'Get milk', user: "Peter", id: 3},
        {title: 'Do a workout', user: "Peter", id: 4}
    ]);
    const addTask = (title, user) => {
        setTasks([...tasks, {title, user, id:uuid()}])
    }
    const removeTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id))
    }
    return (
        <TaskContext.Provider value={{tasks, addTask, removeTask}}>
            {props.children}
        </TaskContext.Provider>
    );
}

export default TaskContextProvider;
