import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from "../assets/img/front-end.png"
import meter2 from "../assets/img/backend.png"
import meter3 from "../assets/img/fullstack.png"
import { BsFillBrightnessHighFill } from "react-icons/bs";

export const Skills = () =>{
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
      return(
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2>
                                Skills
                            </h2>
                            <p><BsFillBrightnessHighFill/> Have the ability to do fullstack.<br/>
                            <BsFillBrightnessHighFill/>Have good knowledg  Database Management Systems : SQL ,MySQL, MongoDB , PostgreSQL.<br/>
                            <BsFillBrightnessHighFill/> Have more than two year of working as a Java Developer and one year of working as a React JS Developer.<br/>
                            <BsFillBrightnessHighFill/>  Have good knowledge of Java Core, Spring Boot, Spring Security, RESTful API, TypeScript Javascript Core, HTML CSS, AngularJS.</p>
                            <div className="skill-slider">
                                <div className="item">
                                    <img src={meter1} alt="Image"/>
                                </div>
                                <div className="item">
                                    <img src={meter3} alt="Image"/>
                                </div>
                                <div className="item-3">
                                    <img src={meter2} alt="Image"/>
                                </div>
                               
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            
        </section>
      )
}