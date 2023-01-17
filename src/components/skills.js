import * as React from 'react';
import { styled } from '@mui/material/styles';
import { Container } from "react-bootstrap";
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';



export const Skills = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

        return (<Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item >
            <h1>Skills</h1>
            <h6>Languages:  Javascript, Java</h6>
            <h6>Smoke, Integration Testing, End- to-End Testing</h6>
            <h6> Technologies: Git, GitHub, HTML, CSS, React.js, Node.js</h6>
            <h6>System and User Acceptance Testing for every modification in the application and new build</h6>
            <h6> Automation Tools: Playwright, Cypress, Appium Mobile automation</h6>
            <h6>BDD (Behavior Driven Development)</h6>
            <h6> TDD (Test Driven Development) using Cucumber in Gherkins format</h6>

        </Carousel.Item>
        <Carousel.Item>
            <h1>Skills</h1>
            <h6> Database: MongoDB, SQL</h6>
            <h6> API Testing: Postam, REST API, Swagger</h6>
            <h6> Test Approaches: Waterfall, Agile/Scrum, SDLC, STLC</h6>
            <h6> Defect Management Tools: JIRA, TestRail, Shortcut</h6>
            <h6>Operating Systems:  Apple macOS, Microsoft Windows, Google's Android OS, Kali Linux</h6>
            <h6>Functional GUI, UI, Compatibility, Sanity, Regression, Cross-browser,</h6>
            <h6>Black box, grey box and white box of the application</h6>

        </Carousel.Item>
    </Carousel>

    )
}



//
// const Item = styled(Paper)(({ theme }) => ({
//     backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#2B2F36',
//     ...theme.typography.body2,
//     padding: theme.spacing(2),
//     textAlign: 'left',
//      color: '#eee6f2',
//
// }));

//   <Container>
//       <h1>Skills</h1>
// <Grid container spacing={3}>
//     <Grid item xs={6}>
//         <Item>
//                     <h5>
//                         <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
//                              className="bi bi-star-fill" viewBox="0 0 16 16">
//                             <path
//                                 d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
//                         </svg> Languages:  Javascript, Java
//                     </h5>
//                      <h5>
//                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
//                               className="bi bi-star-fill" viewBox="0 0 16 16">
//                              <path
//                                  d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
//                          </svg>    Database: MongoDB, SQL
//                      </h5>
//                      <h5>
//                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
//                               className="bi bi-star-fill" viewBox="0 0 16 16">
//                              <path
//                                  d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
//                          </svg>   API Testing: Postam, REST API, Swagger
//                      </h5>
//                      <h5>
//                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
//                               className="bi bi-star-fill" viewBox="0 0 16 16">
//                              <path
//                                  d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
//                          </svg>   Test Approaches: Waterfall, Agile/Scrum, SDLC, STLC
//                      </h5>
//                      <h5>
//                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
//                               className="bi bi-star-fill" viewBox="0 0 16 16">
//                              <path
//                                  d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
//                          </svg>   Defect Management Tools: JIRA, TestRail, Shortcut
//                      </h5>
//                      <h5>
//                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
//                               className="bi bi-star-fill" viewBox="0 0 16 16">
//                              <path
//                                  d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
//                          </svg>   Operating Systems:  Apple macOS, Microsoft Windows, Google's Android OS, Kali Linux
//                      </h5>
//                       <h5>
//                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
//                                className="bi bi-star-fill" viewBox="0 0 16 16">
//                          <path
//                         d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
//                          </svg>   BDD (Behavior Driven Development), TDD (Test Driven Development) using Cucumber in Gherkins format
//             </h5>
//
//         </Item>
//     </Grid>
//     <Grid item xs={6}>
//         <Item>
//             <h5>
//                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
//                      className="bi bi-star-fill" viewBox="0 0 16 16">
//                     <path
//                         d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
//                 </svg> Testing Approaches: Smoke, Integration Testing, End- to-End Testing
//             </h5>
//             <h5>
//                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
//                      className="bi bi-star-fill" viewBox="0 0 16 16">
//                     <path
//                         d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
//                 </svg>    Technologies: Git, GitHub, HTML, CSS, React.js, Node.js
//             </h5>
//             <h5>
//                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
//                      className="bi bi-star-fill" viewBox="0 0 16 16">
//                     <path
//                         d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
//                 </svg>   System and User Acceptance Testing for every modification in the application and new build
//             </h5>
//             <h5>
//                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
//                      className="bi bi-star-fill" viewBox="0 0 16 16">
//                     <path
//                         d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
//                 </svg>   Automation Tools: Playwright, Cypress, Appium Mobile automation
//             </h5>
//             <h5>
//                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
//                      className="bi bi-star-fill" viewBox="0 0 16 16">
//                     <path
//                         d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
//                 </svg>  Functional GUI, UI, Compatibility, Sanity, Regression, Cross-browser
//             </h5>
//         </Item>
//     </Grid>
// </Grid>
//   </Container>
