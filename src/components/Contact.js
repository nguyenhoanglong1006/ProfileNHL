import { Container, Row, Col } from "react-bootstrap";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import {VscSend} from "react-icons/vsc";
export const Contact = () => {
  

  return (
    <section className="contact" id="contacts">
      <Container>
        <Row className="align-items-center">
          <Col size={8}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h2>Contact</h2>
                <form >
                  <Row>
                    <Col size={12} sm={6}>
                      <input type="text" placeholder="First Name" />
                    </Col>
                    <Col size={12} sm={6}>
                      <input type="text"placeholder="Last Name" />
                    </Col>
                    <Col size={12} sm={6}>
                      <input type="email" placeholder="Email Address" />
                    </Col>
                    <Col size={12} sm={6} >
                      <input type="tel" placeholder="Phone No."/>
                    </Col>
                    <Col size={12} sm={12}>
                      <textarea rows="6" placeholder="Message" />
                    </Col>
                    <Col className="d-flex justify-content-end">
                      <button type="submit"><span>Submit <VscSend/></span></button>
                    </Col>
                  </Row>
                </form>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}