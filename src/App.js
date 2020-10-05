import React from 'react';
import SemesterInfo from './semesterInfo/SemesterInfo.js'
import { MDBContainer } from 'mdbreact'

function App() {
  return (
    <MDBContainer style={{border: '1px solid red'}}>
      <div>
        <h1>Document Checks</h1>
        <div>
          <SemesterInfo />
        </div>
      </div>
    </MDBContainer>
  );
}

export default App;
