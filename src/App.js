
import React, { useState } from 'react'
import './App.css';
import About from './Components/About';
import Alert from './Components/Alert';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light')
  const toggleMOde = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#212529'
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white'

    }
  }
  return (
    <>
      <Router>
        <Navbar title="TextUtils" about="About Us" mode={mode} toggleMOde={toggleMOde} />
        <Alert alert="Wellcome To Textutils" />
        <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/">
            <TextForm heading="Enter Your Text To Analyze" mode={mode} />

          </Route>
        </Switch>
      </Router>
      {/* <div className="container my-5"> */}
      {/* <About /> */}
      {/* </div> */}
    </>
  );
}

export default App;
