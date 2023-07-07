import { Container, Row, Col } from "react-bootstrap";
import { BiMap } from "react-icons/bi";
import logo from "../assets/img/logo.png";
import { HiOutlineMailOpen } from "react-icons/hi";
import { AiOutlinePhone,AiOutlineGithub } from "react-icons/ai";
import { FiYoutube } from "react-icons/fi";
export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={3}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={4}>
            <p><AiOutlinePhone/>087947691</p>
            <p><HiOutlineMailOpen/>nguyenhlong1006@gmail.com</p>
            <p><BiMap/>12 Nguyen Van Bao - Phuong 4 - GoVap - TP.HoChiMinh</p>
          </Col>
          <Col size={12} sm={5}>
            <p><AiOutlineGithub/>https://github.com/nguyenhoanglong1006</p>
            <p><FiYoutube/>https://www.youtube.com/channel/UCXA7C1fK_oKZacW4k9cSy2Q</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}