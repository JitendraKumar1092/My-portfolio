import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/Jitendra.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
          {/* <img src={logo} alt="Logo"width={"20px"} style={{borderRadius:"40%",height:"100px"}} /> */}
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
            <a href="https://www.linkedin.com/in/jitendra-kumar-10172b1bb/" target={"_blank"}><img src={navIcon1} alt="" /></a>
                <a href="https://github.com/JitendraKumar1092" target={"_blank"}><img src={navIcon2} alt="" /></a>
                <a href="https://www.instagram.com/btw_its.jeet/" target={"_blank"}><img src={navIcon3} alt="" /></a>
            </div>
            <p>Thank you for attention</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
