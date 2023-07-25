import Copyright from '../../components/pure/Copyright';
import Button from '@mui/material/Button';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom'
import MenuListItems from '../../components/pure/MenuListItems';


const DashBoardPage = ({LoggedIn, logInOut}) => {

    const navigate = useNavigate();

    const login = () => {
        navigate('/login')
    }

    const list = [
        {
            text: 'HOME',
            path: '/',
        },
        {
            text: 'TASKS',
            path: '/tasks',
        }
    ]

    return (
        <div>
            <MenuListItems list={ list }></MenuListItems>
            {LoggedIn ? 
                <Button variant="contained" onClick={logInOut}>Logout</Button>
                :
                <Button variant="contained" onClick={login}>Login</Button>
            }
            <Copyright></Copyright>
        </div>
    );
}

export default DashBoardPage;
