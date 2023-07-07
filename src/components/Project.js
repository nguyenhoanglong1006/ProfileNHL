import { Col, Container, Row } from "react-bootstrap";
import "react-multi-carousel/lib/styles.css";

export const Project = () =>{
   
      return(
        <section className="project" id="projects">
            <Container>
                <div className="project-title">
                    <h1>  
                       Outstanding Projects
                    </h1>
                </div>
                <Row className="pt-3">
                    <div className="col-5">
                            <a href="https://github.com/nguyenhoanglong1006/Website_BookingMovie">
                                   <div className="project-ct"></div>
                            </a>
                   </div>
                    <div className="col-7 ">                       
                        <a href="https://github.com/nguyenhoanglong1006/ProfileNHL.git">
                            <div className="project-top "> </div>
                        </a>
                        <br/>
                        <div className="project-bottom ">
                        </div>
                    </div>
                </Row>
            </Container>
            
        </section>
      )
}