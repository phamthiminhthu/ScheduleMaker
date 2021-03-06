import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Routes,
    Route,
}from 'react-router-dom';
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
import ListSubject from './screens/listSubject/SubjectList';

axios.defaults.baseURL="http://localhost:8000/";
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.post['Accept'] = 'application/json';
axios.defaults.withCredentials = true;
axios.interceptors.request.use(function(config){
    const token = localStorage.getItem('auth_token');
    config.headers.Authorization = token ? `Bearer ${token}` : ``;
    return config;
});


function App() {
    return (
       <Router className="App_container">
           <Routes>
               <Route path='/' element={<Home/>}> </Route>
               <Route path='/home' element={<Home/>}> </Route>
               <Route path='/register' element={<Register/>}></Route>
               <Route path='/login' element={<SignIn/>}></Route>
               <Route path='/speaker-page' element={<SpeakerPage/>}></Route>
               <Route path='/student' element={<HomeAuthor/>}></Route>
               <Route path='/student/home' element={<HomeAuthor/>}></Route>
               <Route path='/student/account' element={<Account/>}></Route>
               <Route path='/student/my-schedule' element={<MySchedule/>}></Route>
               <Route path='/student/my-notes' element={<MyNotes/>}></Route>
               <Route path='/student/schedule-maker' element={<ScheduleMaker/>}></Route>
               <Route path='/student/list-subject' element={<ListSubject/>}></Route>
               <Route path='/student/create-subject' element={<CreateSubject/>}></Route>
               {/* <Route path='/student/' element={<Account/>}></Route> */}

               
              
           </Routes>

       </Router>
    );
}

export default App;

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}
