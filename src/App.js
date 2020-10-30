import React from 'react';
import SemesterInfo from './semesterInfo/SemesterInfo.js'
import { MDBContainer } from 'mdbreact'

function App() {
  return (
    <MDBContainer>
      
      <div>
        <h1>Document Checks</h1>
        <SemesterInfo />
      </div>
    </MDBContainer>
  );
}

export default App;
