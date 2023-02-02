import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './Pages/Homepage';
import InformedConsent from './Pages/InformedConsent';
import SurveyComplete from './Pages/SurveyComplete';
import SurveyPage from './Pages/SurveyPage';
import InvalidToken from './Pages/InvalidToken';
import TokenAlreadyUsed from './Pages/TokenAlreadyUsed';
import ReturningUser from './Pages/ReturningUser';
import './App.css';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <Router>
      <Routes>
        <Route path='/' element={<Homepage />}></Route>
        <Route path='/InformedConsent' element={<InformedConsent />}></Route>
        <Route path='/SurveyComplete' element={<SurveyComplete />}></Route>
        <Route path='/SurveyPage' element={<SurveyPage />}></Route>
        <Route path='/InvalidToken' element={<InvalidToken />}></Route>
        <Route path='/TokenAlreadyUsed' element={<TokenAlreadyUsed />}></Route>
        <Route path='/ReturningUser' element={<ReturningUser />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
