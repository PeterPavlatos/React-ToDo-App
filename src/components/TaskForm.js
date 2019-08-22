import React, {useContext, useState} from 'react'
import { TaskContext } from '../contexts/TaskContext';
import { ToggleFormContext } from '../contexts/ThemeContxt';

const NewTaskForm = () => {
    const { addTask } = useContext(TaskContext);
    const { toggleForm, toggleAddTaskForm } = useContext(ToggleFormContext);
    const [title, setTitle] = useState('');
    const [user, setUser] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        addTask(title, user);
        setTitle('');
        setUser('');
    }
    const handleOnClick = (e) => {
        e.preventDefault();
        toggleForm();
    }

    const buttonText = toggleAddTaskForm ? (
        "Add a Task"
        ) : (
            "Hide Form"
        );

    const form = toggleAddTaskForm ? (
        ""
        ) : (
            <form className="taskForm" onSubmit={handleSubmit}>
                <label >Title</label>
                <input type="text" name="title" value={title} onChange={(e) => setTitle(e.target.value)} required />
                <label >User</label>
                <input type="text" name="user" value={user} onChange={(e) => setUser(e.target.value)} required />
                <input type="submit" className="submitBtn" value="Add task"/>
            </form>
        );
    return (
        <>
            <button className="btnToggleForm" onClick={handleOnClick}>
                { buttonText }
            </button>
            { form }
        </>
    )
}

export default NewTaskForm
