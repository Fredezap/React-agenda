import { BrowserRouter as Router, Route, Routes, Link, Navigate, useParams, useNavigate } from 'react-router-dom';
import DashBoardPage from './pages/dashboard/DashBoardPage';
import LoginFormik from './components/pure/forms/loginFormik';
import MenuListItems from './components/pure/MenuListItems';
import RegisterFormik from './components/pure/forms/registerFormik';
import TaskListComponent from './components/container/TaskListComponent';
import { useState } from 'react';


function AppRoutingFinal() {

  // TODO: Add logic to get logged in and out
  let [LoggedIn, setLogInOut] = useState(true);

  const LogginInAndOut = () => {
    LoggedIn ?
    setLogInOut(LoggedIn=false)
    :
    setLogInOut(LoggedIn=true)
  } 

  const massage = true;

    return (
      <Router>
        <Routes>
          <Route exact path="/" element={<DashBoardPage LoggedIn={LoggedIn} logInOut={LogginInAndOut} />} />
          <Route exact path='/login' element={<LoginFormik logInOut={LogginInAndOut}/>} />
          <Route exact path="/dashboard" element={<DashBoardPage LoggedIn={LoggedIn} logInOut={LogginInAndOut}/>} />
          <Route exact path="/register" element={<RegisterFormik />} />
          <Route path="/tasks" element={LoggedIn ? <TaskListComponent /> : <LoginFormik logInOut={LogginInAndOut} massage={massage}/>} />
        </Routes>
      </Router>
    );
  }

export default AppRoutingFinal;
