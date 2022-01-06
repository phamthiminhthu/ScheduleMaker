import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from 'react-router-dom';
import Home from './screens/home/Home';
import Register from './screens/register/Register';
import SignIn from './screens/signIn/SignIn';
import SpeakerPage from './screens/speaker/SpeakerPage'
import axios from 'axios';
import HomeAuthor from './screens/homeAuthor/HomeAuthor';
import Account from './screens/account/Account';
import MySchedule from './screens/mySchedule/MySchedule';
import MyNotes from './screens/myNotes/MyNotes';
import ScheduleMaker from './screens/scheduleMaker/ScheduleMaker';
import CreateSubject from './screens/createSubject/CreateSubject';
import SubjectList from './screens/listSubject/SubjectList';
import CreateScheduleMaker from './screens/createMySchedule/CreateScheduleMaker';
import ScheduleOutSide from './screens/scheduleOutSide/ScheduleOutSide';


export const instance = axios.create({
    baseURL: 'http://localhost:8000/',
    withCredentials :  true,
    headers : {
        secure: true,
        sameSite: "none",
        
    }
    
  });

instance.interceptors.request.use(function (config) {
    const token = localStorage.getItem('auth_token');
    config.headers.Authorization = token ? `Bearer ${token}` : ``;
    return config;
});

export const cloudinary = axios.create({
    withCredentials : false
});



function App() {
    return (
        <Router className="App_container">
            <Routes>
                <Route path='/' element={<Home />}> </Route>
                <Route path='/home' element={<Home />}> </Route>
                <Route path='/register' element={<Register />}></Route>
                <Route path='/login' element={<SignIn />}></Route>
                <Route path='/speaker-page' element={<SpeakerPage />}></Route>
                <Route path='/schedule' element={<ScheduleOutSide/>}></Route>
                <Route path='/student' element={<HomeAuthor />}></Route>
                <Route path='/student/home' element={<HomeAuthor />}></Route>
                <Route path='/student/account' element={<Account />}></Route>
                <Route path='/student/my-schedule' element={<MySchedule />}></Route>
                <Route path='/student/my-notes' element={<MyNotes />}></Route>
                <Route path='/student/schedule-maker' element={<ScheduleMaker />}></Route>
                <Route path='/student/list-subject' element={<SubjectList />}></Route>
                <Route path='/student/create-subject' element={<CreateSubject />}></Route>
                <Route path='/student/create-my-schedule' element={<CreateScheduleMaker />}></Route>



            </Routes>

        </Router>
    );
}

export default App;

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}
