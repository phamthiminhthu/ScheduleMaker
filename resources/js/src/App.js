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


function App() {
    return (
       <Router className="App_container">
           <Routes>
               <Route path='/' element={<Home/>}> </Route>
               <Route path='/home' element={<Home/>}> </Route>
               <Route path='/register' element={<Register/>}></Route>
               <Route path='/sign-in' element={<SignIn/>}></Route>
               <Route path='/speaker-page' element={<SpeakerPage/>}></Route>
           </Routes>

       </Router>
    );
}

export default App;

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}
