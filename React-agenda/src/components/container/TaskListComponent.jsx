import React from 'react'
import PropTypes from 'prop-types'
import { Task } from '../../models/task.class'
import { LEVELS } from '../../models/levels.enum'
import TaskComponent from '../pure/TaskComponent'
import { useState } from 'react'
import { useEffect } from 'react'
import TaskForm from '../pure/forms/taskForm'
import TaskFormik from '../pure/forms/taskFormik'

const TaskListComponent = () => {
    
    const defaultTask1 = new Task('Example 1', 'Description 1', false, LEVELS.NORMAL);
    const defaultTask2 = new Task('Example 2', 'Description 2', true, LEVELS.URGENT);
    const defaultTask3 = new Task('Example 3', 'Description 3', false, LEVELS.BLOCKING);

    const allTasks = [defaultTask1, defaultTask2, defaultTask3]

    const [tasks, setTasks] = useState(allTasks);
    const [loading, setLoading] = useState(true);

    // useEffect(() => {
    //     console.log('Modificacion de tareas')
    //     setLoading(false)
    //     return () => {
    //         console.log('Componente de Lista de tareas va a ser desmontado')
    //     };
    // }, [tasks]);

    function completeTask (task) {
        console.log('cambiando una tarea', task)
        const index = tasks.indexOf(task);
        const allTasks2 = [...tasks]
        tasks[index].completed = !tasks[index].completed
        setTasks(allTasks2)
        console.log('tarea cambiada creo', task)
    }

    function deleteTask (task) {
        console.log('eliminando una tarea', task)
        const index = tasks.indexOf(task);
        const allTasks2 = [...tasks]
        allTasks2.splice(index,1);
        setTasks(allTasks2)
        console.log('tarea eliminada creo', task)
    }

    function addTask (task) {
        console.log('agregando una tarea', task)
        const allTasks2 = [...tasks]
        allTasks2.push(task);
        setTasks(allTasks2)
        console.log('tarea agregada creo', task)
    }

    const Table = () => {
        return (
            <table>
                <thead>
                    <tr>
                        <th scope='col'>Title</th>
                        <th scope='col'>Description</th>
                        <th scope='col'>Prioridad</th>
                        <th scope='col'>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    { tasks.map((task, index) => {
                        return (
                            <TaskComponent 
                            key ={ index }
                            task={ task }
                            complete={ completeTask }
                            remove={ deleteTask }>
                            </TaskComponent>                                
                        )
                    }   )}
                </tbody>
            </table>
        )
    }

    let taskTable;

    if(tasks.length > 0) {
        taskTable = <Table></Table>
    }else{
        taskTable = (
            <div>
                <h3>There are not tasks</h3>
                <h4>Please add one</h4>
            </div>
        )
    }

    return (
        <div>
            <div className='card-body d-flex justify-content-center' data-mdb-perfect-scrollbar='true' style={{ position: 'relative', width: '800px', height: '50px' }}></div>
            <div className='col-12'>
                <div className='card'>
                    <div className='card-header p-3'>
                        <h5>
                            Your tasks:
                        </h5>
                        <div>
                            {taskTable}
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <TaskFormik add={ addTask }></TaskFormik>
            </div>
        </div>
    )
}

export default TaskListComponent
