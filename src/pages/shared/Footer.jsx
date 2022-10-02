import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Footer.css'


AOS.init();
const Footer = () => {
    return (
        <footer className='footer-container' data-aos="fade-up" data-aos-duration="5000">
            <Container bg='Dark' >
                <Row style={{ padding: '10px 10px'}}>
                    <Col sm>
                        <h2>Hello</h2>
                    </Col>
                    <Col sm><h2 className="footer-title ">Menu</h2><br />
                       
                       <Link to={"/"} className="link link-hover footer-text ">Home</Link><br />
                        <Link to={"/shop"} className="link link-hover footer-text">Shop</Link><br />
                        <a className="link link-hover footer-text">About</a><br />
                        <a className="link link-hover footer-text">Contact Us</a>
                       
                    </Col>
                    <Col sm><h2 className="footer-title">Company</h2>
                        <br />
                        <a className="link link-hover footer-text">About us</a>
                        <br />
                        <a className="link link-hover footer-text">Contact</a>
                        <br />
                        <a className="link link-hover footer-text">Jobs</a>
                        <br />
                        <a className="link link-hover footer-text">Press kit</a></Col>
                    <Col sm><h2 className="footer-title">Legal</h2>
                        <br />
                        <a className="link link-hover footer-text">Terms of use</a>
                        <br />
                        <a className="link link-hover footer-text">Privacy policy</a>
                        <br />
                        <a className="link link-hover footer-text">Cookie policy</a></Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;