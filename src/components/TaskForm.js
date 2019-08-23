import React, {useContext, useState} from 'react'
import { TaskContext } from '../contexts/TaskContext';
import { ToggleFormContext } from '../contexts/ThemeContxt';
import { Collapse } from 'reactstrap';

const NewTaskForm = () => {
    const { addTask } = useContext(TaskContext);
    const { toggleForm, collapse } = useContext(ToggleFormContext);
    const [title, setTitle] = useState('');
    const [user, setUser] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        if(!title ){
            alert("Need a title!");
            return;
        }
        if(!user ){
            alert("Need a user!");
            return;
        }
        addTask(title, user);
        setTitle('');
        setUser('');
    }
    const handleOnClick = (e) => {
        e.preventDefault();
        toggleForm();
    }

    const buttonText = collapse ? (
            "Hide Form"
        ) : (
            "Add a Task"
        );

    const form =  <form className="taskForm" onSubmit={handleSubmit}>
            <label >Title</label>
            <input type="text" className="form-control" name="title" value={title} onChange={(e) => setTitle(e.target.value)} required />
            <label >User</label>
            <input type="text" className="form-control" name="user" value={user} onChange={(e) => setUser(e.target.value)} required />
            <button className="btn btn-primary" onClick={handleSubmit}  style={{ marginBottom: '1rem' }}>Submit</button>
        </form>;
        
    return (
        <>
            <button className="btn btn-primary btnToggleForm" onClick={handleOnClick}>
                { buttonText }
            </button>
            <Collapse isOpen={collapse}>
                { form }
            </Collapse>
        </>
    )
}

export default NewTaskForm
