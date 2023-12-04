import React from 'react'
import '../../pages/style.css';
import { Container, Row, Col } from 'react-bootstrap'


function Aboutpage() {
    return (
        <div className='aboutpagebackground'>
            <Container>
                <Row className='textbackground'>
                    <Col md={7} >
                        <h3 className='aboutmetext'>About <span>Me</span></h3>
                        <p className='aboutdetails'><b>I'm a Computer Science Engineering Student from India. I build websites with a focus on providing the experience for everyone using them and responsiveness. Curious to learn more about developing scalable applications, love problem solving.Looking forward to learn new things in life. </b>
                        </p>
                        <ul className='skilllist'>
                            <Row>
                                <h3>Skills</h3>
                                <Col md={7}>
                                    <li>HTML5/CSS3</li>
                                    <li>JavaScript</li>
                                    <li>React Js</li>
                                    <li>Bootsrap</li>
                                </Col>
                                <Col md={5}>
                                    <li>Python</li>
                                    <li>C/C++</li>
                                    <li>Java</li>
                                    <li>Material-ui</li>
                                </Col>
                            </Row>
                        </ul>
                    </Col>
                    <Col md={5}>
                        <div className="webimage"></div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Aboutpage