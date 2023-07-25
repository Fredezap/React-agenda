import React, { useEffect } from 'react';
import '../../styles/task.css'
import PropTypes from 'prop-types';
import { Task } from "../../models/task.class";
import { LEVELS } from "../../models/levels.enum";

const TaskComponent = ({ task, complete, remove }) => {

    // useEffect(() => {
    //     console.log('Tarea creada')
    //     return () => {
    //         console.log(`Tarea: ${task.name} va a ser desmontada`)
    //     };
    // }, [task]);

    /**
    * Function that returns a Badge
    * depending on the level of the task
    */
    function taskLevelBadge(){
        switch (task.level) {
            case LEVELS.NORMAL:
                return(<h6 className='mb-0'><span className='badge bg-primary'>{ task.level }</span></h6>);
            case LEVELS.URGENT:
                return(<h6 className='mb-0'><span className='badge bg-warning'>{ task.level }</span></h6>);
            case LEVELS.BLOCKING:
                return(<h6 className='mb-0'><span className='badge bg-danger'>{ task.level }</span></h6>);
            default:
                break
        }
    }

    /**
    * Function that returns an icon
    * depending on complation of the task
    */
    function taskCompletedIcon() {
        switch (task.completed) {
            case true:
                return(<i onClick={ () => complete(task)} className='bi-toggle-on task-action' style={ { color:'green', fontWeigh:'bold'} }></i>);
            case false:
                return(<i onClick={ () => complete(task)} className='bi-toggle-off task-action' style={ { color:'gray', fontWeigh:'bold'} }></i>);
            default:
                break;
            }
        }

    const taskCompleted = {
        color: 'gray',
        textDecoration: 'line-through',
        fontWeigh: 'bold'
    }
    
    const taskPennding = {
        color: 'tomato',
        fontWeigh: 'bold'
    }

    return (
        <tr className='fw-normal' style={task.completed ? taskCompleted : taskPennding}>
            <th>
                <span className='ms-2'>
                    { task.name }
                </span>
            </th>
            <td>
                <span className='align-middle'>
                    { task.description }
                </span>
            </td>
            <td>
                <span className='align-middle'>
                {/* { execution of function to return task level } */}
                    { taskLevelBadge() }
                </span>
            </td>
            <td className='align-middle'>
                {/* { execution of function to return icon depending on complation } */}
                { taskCompletedIcon() }
                <i onClick={ () => remove(task) } className='bi-trash' style={ { color:'red', fontSize:'20px'} }></i>
            </td>
        </tr>
    );
};


TaskComponent.propTypes = {
    task: PropTypes.instanceOf(Task).isRequired,
    complete: PropTypes.func.isRequired,
    delete: PropTypes.func,
};


export default TaskComponent;

