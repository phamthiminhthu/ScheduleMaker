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
import HomeHasAuthor from './screens/homeAuthor/HomeAuthor';

axios.defaults.baseURL="http://localhost:8000/";
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.post['Accept'] = 'application/json';
axios.defaults.withCredentials = true;

function App() {
    return (
       <Router className="App_container">
           <Routes>
               <Route path='/' element={<Home/>}> </Route>
               <Route path='/home' element={<Home/>}> </Route>
               <Route path='/register' element={<Register/>}></Route>
               <Route path='/login' element={<SignIn/>}></Route>
               <Route path='/speaker-page' element={<SpeakerPage/>}></Route>
               <Route path='/student' element={<HomeHasAuthor/>}></Route>
           </Routes>

       </Router>
    );
}

export default App;

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}
