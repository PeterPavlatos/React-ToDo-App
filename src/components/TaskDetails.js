import React, {useContext} from 'react'
import { TaskContext } from '../contexts/TaskContext';

const TaskDetails = ({task}) => {
    const {removeTask} = useContext(TaskContext);
    return (
        <li onClick={() => removeTask(task.id)}>
            <div className="title">{task.title}</div>
            <div className="user">{task.user}</div>
        </li>
    )
}

export default TaskDetails
