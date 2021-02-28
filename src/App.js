import React from 'react';
import SemesterInfo from './semesterInfo/SemesterInfo.js'
import Contact from './contact/Contact.js'
import Navbar from './navbar/Navbar.js'
import { MDBContainer } from 'mdbreact'
import { Switch, Route } from 'react-router-dom'

function App() {
  return (
    <MDBContainer>
      <Navbar/>
        
        <Switch>
          <Route exact path='/' component={SemesterInfo}></Route>
          <Route path='/contact' component={Contact}></Route>
        </Switch>
    </MDBContainer>
  );
}

export default App;
