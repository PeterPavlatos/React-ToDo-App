import React, { useContext } from 'react'
// import { AuthContext } from '../contexts/AuthContext';
import { TaskContext } from '../contexts/TaskContext';

const Navbar = () => {
    const { tasks } = useContext(TaskContext);
    // const { isAuthenticated, toggleAuth } = useContext(AuthContext);
   
    return (
        <div className="navbar">
            <h1>To Do List</h1>
            <p>Currently you have <b>{ tasks.length }</b> tasks to do!</p>
            {/* <div onClick={toggleAuth}>
                { isAuthenticated ? 'Logged Out' : 'Logged In' }
            </div>
          */}
        </div>
    )
}

export default Navbar


