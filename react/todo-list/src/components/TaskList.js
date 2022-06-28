import React from 'react'

const TaskList = (props) => {

    const {tasks, setTasks} = props;

    const handleChange = (i, complete) => {
        const newTasks = tasks.map((task, index) => {
            if(index === i) {
                const updatedTask = {...task, complete:complete};
                return updatedTask;
            }
            return task;
        });
        setTasks(newTasks);
        console.log("Tasks: ", newTasks);
    }
    
    const handleDelete = (i) => {
        const filteredTasks = tasks.filter((t, index) => index !== i);
        setTasks(filteredTasks);
        console.log("Filtered: ", filteredTasks);
    }
    
    return (
    <div>
        <div className='taskList'>
            {tasks.map(( task, index) => ( 
            <div key={index} style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                <p className={task.complete ? "completed" : ""}>{task.taskDesc}</p>
                <input type="checkbox" checked={task.complete} onChange={(e) => handleChange(index, e.target.value)}></input>
                <button className='delButton' onClick={() => handleDelete(index)}>Delete</button>
            </div> ))}
        </div>
    </div>
    )
}

export default TaskList