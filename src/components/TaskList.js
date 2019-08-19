import React, { useContext } from 'react'
import { TaskContext } from '../contexts/TaskContext';
import TaskDetails from '../components/TaskDetails';

const TaskList = () => {
   
    const {tasks} = useContext(TaskContext);    

    return tasks.length ? (
        <div className="tasklist">
            <ol>
                {tasks.map(task => {
                    return (
                        <TaskDetails task={task} key={task.id} />
                    );
                })}
            </ol>
        </div>
    ) : (
        <div className="empty">No tasks to do</div>
    )
}

export default TaskList;
