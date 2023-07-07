
import { Col, Container, Row } from "react-bootstrap";
import HeadderImg from '../assets/img/avt.jpg'
import { ArrowRightCircle } from "react-bootstrap-icons";
import { useEffect, useState } from "react";

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const toRotate = [ "Web Developer", "Web Designer" ];
    const period = 2000;
  
    useEffect(() => {
      let ticker = setInterval(() => {
        tick();
      }, delta);
  
      return () => { clearInterval(ticker) };
    }, [text])
  
    const tick = () => {
      let i = loopNum % toRotate.length;
      let fullText = toRotate[i];
      let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
  
      setText(updatedText);
  
      if (isDeleting) {
        setDelta(prevDelta => prevDelta / 2);
      }
  
      if (!isDeleting && updatedText === fullText) {
        setIsDeleting(true);
        setDelta(period);
      } else if (isDeleting && updatedText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setDelta(500);
      }
    }
  
    return ( 
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Welcome to HoangLongDev</span>
                        <h1>{"Hi I'm "}<span className="wrap">{text}</span></h1>
                        <p>Welcome to HoangLongDev's personal information website.<br/>
                          This is a website that describes all of HoangLongDev's skills, technology, projects, contact information,...</p>
                        <button onClick={() => console.log('connect')}>Let's connect <ArrowRightCircle/></button>
                    </Col>
                    <Col xs={10} md={2} xl={3}> 
                        <img src={HeadderImg} alt="Header Img"/>   
                    </Col>
                </Row>
            </Container>
        </section>
     );
}

 