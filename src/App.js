import React from 'react';
import SemesterInfo from './semesterInfo/SemesterInfo.js'
import { MDBContainer } from 'mdbreact'

function App() {
  return (
    <MDBContainer>
      <>
        <h1 className="d-flex justify-content-center">Document Checks</h1>
        <SemesterInfo />
      </>
    </MDBContainer>
  );
}

export default App;
