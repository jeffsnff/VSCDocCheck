<a id="readme-top"></a>

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/jeffsnff/VSCDocCheck">
    <img src="src/navbar/shield_vsc.png" alt="Logo" width="80" height="80">
  </a>
  <h1 align="center">Veteran Success Document Checker</h1>

  <p align="center">
    Document Checker Tool for UvU Veteran Students
    <br />
    <br />
    <a href="https://vscdoc.netlify.app/">View Project</a>
    ·
    <a href="https://github.com/jeffsnff/VSCDocCheck/issues/new?labels=bug&template=bug-report---.md">Report Bug</a>
    ·
    <a href="https://github.com/jeffsnff/VSCDocCheck/issues/new?labels=enhancement&template=feature-request---.md">Request Feature</a>
  </p>
</div>

<!-- ABOUT THE PROJECT -->
## About The Project
Project Summary: Veteran Student Document Verification System

### Objective:
To create a streamlined process for verifying documents submitted by veteran students, updating their profiles, and communicating the status of their submissions via email. This system ensures efficiency, accuracy, and clarity in managing veteran student records.

### Phase 1: Initial Planning and Proposal 
The project began with a meeting with managers to identify pain points in the current document verification process. I outlined challenges, including manual verification and inconsistent communication with students.
I proposed developing a web-based application to standardize these processes. The key functionalities would include:
- Ability to input semester, year and user initials to be include in email template and Veteran student profile note.
- Ability to select what Chapter of Education benefits Veteran was using which presented what documents that Veteran student needed to certify benefits.
- Ability to select documents a Veteran student has submitted for certifying.
- Generating email template and Veteran profile note to inform students of the status of their submissions.

The managers approved the proposal, highlighting the need for a user-friendly interface and keeping it within the FERPA rules and not collect PII of students or users.

### Phase 2: Wireframing 
The next step involved wireframing the system to visualize its functionality and workflow. I used tools like Wireframe.cc to create initial wireframes, focusing on:
- Section for users to input semester, year and initials.
- Section to select what chapter users were certifying for.
- Section to select documents that have been provided by Veteran student.
- Section where email body and subject and profile note are generated using user inputted information and based off selections made.

The wireframes were presented to the management team for feedback. After iterative refinements based on their input, we finalized the design layout and user flow.

### Phase 3: UI/UX Design in Figma
With approved wireframes, I transitioned to designing the application in Figma. The goal was to create a modern, accessible interface with a professional aesthetic. Key elements included:
- A clean, intuitive layout for the user to easily see any updates from management.
- Accessible forms and workflow for users.
- Email templates with clear messaging and a professional tone.

The Figma designs were shared with stakeholders for review. Incorporating their feedback, the designs were finalized, ensuring alignment with branding and user experience goals.

### Phase 4: Development in React.js
I began development using React.js to create a dynamic and responsive web application. Key development steps included:
- Building the front-end components for the dashboard, submission section, and profile and email template system.
- Conducting rigorous testing to ensure functionality.
- User testing with the intended users of the application to get their feedback.

The system was developed iteratively, with regular progress updates and demos to management and users.

### Phase 5: Final Presentation and Deployment
Once development was complete, I prepared a comprehensive presentation for management. The presentation included:
- A live demonstration of the application’s features and workflow.
- Metrics showing improvements in efficiency and accuracy compared to the previous process.
- Management expressed enthusiasm for the system and approved its deployment. The application was rolled out the same day I presented it to them. The users were very happy about this site since it was  mobile friendly and could be made into a small width and still be usable.

### Outcome: The project successfully addressed the initial challenges, resulting in:
- Reduced processing time for document verification.
- Improved accuracy and consistency in profile updates.
- Enhanced communication with students through timely and clear email messages.
- Positive feedback from both management and users.

### Built With

[![React][React.js]][React-url][![Bootstrap][Bootstrap.com]][Bootstrap-url]

<!-- USAGE EXAMPLES -->
## Usage

This tool is used to help Veteran student works at Utah Valley University to check incoming students documents.
The user inputs the semseter and year they are checking documents for and then their initials.
Then they would select the Education Chapter the Veteran is using for UvU which then renders checkboxs for that Chapter.
The user will then make selections and press Submit. This renders the note for the studnet profile, and the email subject and body that the user will email to the student.

<!-- CONTACT -->
## Contact

Jeff - jeff@somemail.mozmail.com
Project Link: [VSC Doc Check](https://github.com/jeffsnff/VSCDocCheck)

## Acknowledgments

* [Img Shields](https://shields.io)
* [README.md Template Creator](https://github.com/othneildrew/Best-README-Template)

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
