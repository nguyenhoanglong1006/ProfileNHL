import { Col, Container, Row } from "react-bootstrap";
import "react-multi-carousel/lib/styles.css";
import meter1 from "../assets/img/front-end.png"
import meter2 from "../assets/img/backend.png"
import meter3 from "../assets/img/fullstack.png"
import { BsFillBrightnessHighFill } from "react-icons/bs";

export const Skills = () =>{
    
      return(
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h1>
                                Skills
                            </h1>
                            <p><BsFillBrightnessHighFill/> Have the ability to do fullstack.<br/>
                            <BsFillBrightnessHighFill/>Have good knowledg  Database Management Systems : SQL ,MySQL, MongoDB , PostgreSQL.<br/>
                            <BsFillBrightnessHighFill/> Have more than two year of working as a Java Developer and one year of working as a React JS Developer.<br/>
                            <BsFillBrightnessHighFill/>  Have good knowledge of Java Core, Spring Boot, Spring Security, RESTful API, TypeScript Javascript Core, HTML CSS, AngularJS.</p>
                            <div className="skill-slider">
                                <div className="item ">
                                    <img src={meter1} alt="Image2"/>
                                </div>
                                <div className="item">
                                    <img src={meter3} alt="Image1"/>
                                </div>
                                <div className="item-3">
                                    <img src={meter2} alt="Image3"/>
                                </div>
                               
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            
        </section>
      )
}