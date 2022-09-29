import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
AOS.init();
const Footer = () => {
    return (
        <footer data-aos-duration="5000">
            <Container bg='Dark' >
                <Row style={{ padding: '10px 10px' }}>
                    <Col sm>
                        <p>Hello</p>
                    </Col>
                    <Col sm><span className="footer-title">Menu</span>
                        <li><Link to={"/"} className="link link-hover">Home</Link></li>
                        <li><Link to={"/shop"} className="link link-hover">Shop</Link></li>
                        <li ><a className="link link-hover">About</a></li>
                        <li><a className="link link-hover">Contact Us</a></li>
                    </Col>
                    <Col sm><span className="footer-title">Company</span>
                        <br />
                        <a className="link link-hover">About us</a>
                        <br />
                        <a className="link link-hover">Contact</a>
                        <br />
                        <a className="link link-hover">Jobs</a>
                        <br />
                        <a className="link link-hover">Press kit</a></Col>
                    <Col sm><span className="footer-title">Legal</span>
                        <br />
                        <a className="link link-hover">Terms of use</a>
                        <br />
                        <a className="link link-hover">Privacy policy</a>
                        <br />
                        <a className="link link-hover">Cookie policy</a></Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;