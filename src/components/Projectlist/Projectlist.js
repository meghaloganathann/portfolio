import React from 'react'
import '../../pages/style.css';
import ProjectCard from "../ProjectCard";
import { Container, Row, Col } from 'react-bootstrap'
import useradminpanel from '../../Assets/rapido2.jpg'
import olximage from '../../Assets/flipcard.gif'
import netfliximage from '../../Assets/front.png'


function Projectlist() {
  return (
    <div className="projectbackground">
      <Container fluid className="project-section">
        <Container>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={olximage}
                isBlog={false}
                title="FlipCard"
                description="Lorem ipsum dolor sit amet. Sit minus laboriosam et sapiente consequatur qui neque odio. Id porro eius et autem animi est perferendis quam et reiciendis repellendus At ipsa quia in eius sint"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={netfliximage}
                isBlog={false}
                title="Prophenta"
                description="Lorem ipsum dolor sit amet. Sit minus laboriosam et sapiente consequatur qui neque odio. Id porro eius et autem animi est perferendis quam et reiciendis repellendus At ipsa quia in eius sint"
              />
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  )
}
export default Projectlist