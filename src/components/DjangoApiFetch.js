import React, {useState, useEffect} from 'react'
import axios from 'axios'

const DjangoApiFetch = () => {

    const [tasks, setTasks] = useState([])
    const [selectedTask, setSelectedTask] = useState([])
    const [id, setId] = useState(1)

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/tasks/', {
            headers: {
                'Authorization': 'Token 8434f1da3263ff37d87b87c23b0910cf02731c1d'
            }
        })
        .then(res => {setTasks(res.data)})
    }, [])

    const getTask = () => {
        axios.get(`http://127.0.0.1:8000/api/tasks/${id}/`, {
            headers: {
                'Authorization': 'Token 8434f1da3263ff37d87b87c23b0910cf02731c1d'
            }})
            .then(res => {setSelectedTask(res.data)})
    }

    const deleteTask = () => {
        axios.delete(`http://127.0.0.1:8000/api/tasks/${id}/`, {
            headers: {
                'Authorization': 'Token 8434f1da3263ff37d87b87c23b0910cf02731c1d'
            }})
            .then(res => {setTasks(tasks.filter(task => task.id !== id)); setSelectedTask([])})
    }

    return (
        <div>
            <ul>
                {
                    tasks.map(task => <li key={task.id}> {task.title} {task.id}
                    <button onClick={() => deleteTask(task.id)}>
                        <i className="fas fa-trash-alt"></i>
                    </button>
                    
                    
                    </li>)
                }
            </ul>

            Set id <br/>
            <input type='text' value={id} onChange={evt=>{setId(evt.target.value)}}/>
            <br/>
            <button type='button' onClick={() => getTask()}>Get Task</button>
            {/* <button type='button' onClick={() => deleteTask()}>DELETE</button> */}
            <h3>{selectedTask.title} {selectedTask.id}</h3>
        </div>
    )
}

export default DjangoApiFetch
