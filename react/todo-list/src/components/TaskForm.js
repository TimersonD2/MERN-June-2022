import {useState} from 'react'

const TaskForm = (props) => {

    const {tasks, setTasks} = props;

    const [taskDesc, setTaskDesc] = useState("");
    const [complete, setComplete] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const task = {taskDesc:taskDesc, complete:complete};
        setTasks([...tasks, task]);
        setTaskDesc("");
        setComplete(false);
        console.log("Tasks: ", tasks);
    }
    
    return (
    <div>
        <form onSubmit={handleSubmit}>
        <div className='taskDesc'>
            <label htmlFor='description'></label>
            <input type="text" id="description" value={taskDesc} style={{width:"400px"}} onChange={(e) => setTaskDesc(e.target.value)}></input>
        </div>
        <div className='taskAdd'>
            <button className='addButton'>add</button>
        </div>
        </form>
    </div>
    )
}

export default TaskForm