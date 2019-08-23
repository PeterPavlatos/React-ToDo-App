import React, { useContext } from 'react'
// import { AuthContext } from '../contexts/AuthContext';
import { TaskContext } from '../contexts/TaskContext';
import { Badge } from 'reactstrap';

const Navbar = () => {
    const { tasks } = useContext(TaskContext);
    // const { isAuthenticated, toggleAuth } = useContext(AuthContext);
   
    return (
        <div className="navbar">
            <h1>To Do List</h1>
            <p>Currently you have <Badge>{ tasks.length }</Badge> tasks to do!</p>
            {/* <div onClick={toggleAuth}>
                { isAuthenticated ? 'Logged Out' : 'Logged In' }
            </div>
          */}
        </div>
    )
}

export default Navbar


