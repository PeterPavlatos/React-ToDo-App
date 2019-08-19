import React, {useContext, useState} from 'react'
import { TaskContext } from '../contexts/TaskContext';

const NewTaskForm = () => {
    const { addTask } = useContext(TaskContext);
    const [title, setTitle] = useState('');
    const [user, setUser] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        addTask(title, user);
        setTitle('');
        setUser('');
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="To do title" value={title} onChange={(e) => setTitle(e.target.value)} required />
            <input type="text" placeholder="User" value={user} onChange={(e) => setUser(e.target.value)} required />
            <input type="submit" className="submitBtn" value="Add task"/>
        </form>
    )
}

export default NewTaskForm
