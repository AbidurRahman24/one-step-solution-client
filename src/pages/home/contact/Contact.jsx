import { faAddressBook, faEnvelope, faLocation, faPhone, faPiggyBank } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Col, Container, Row } from 'react-bootstrap';
import './Contact.css'
import mapImage from './map-1.jpg'
const Contact = () => {
    return (
        <div className="contact-container">
        <Container className="contact-container">
            <div className="contact-header">
                <h1>CONTACT US</h1>
            </div>
            <Row style={{color:'white'}}>
                <Col xs={6}>
                    <Row style={{textAline:'center'}}>
                        <Col>
                            <h1><FontAwesomeIcon icon={faAddressBook} /></h1>
                            <h5>Address:</h5>
                            <p>Shaistaganj, Sylhet</p>
                        </Col>
                        <Col>
                        <h1><FontAwesomeIcon icon={faEnvelope} /></h1>
                            <h5>Email:</h5>
                            <p>niloybdesh@gmail.com</p>
                            <p>abidurniloy@gmail.com</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                        <h1><FontAwesomeIcon icon={faPhone} /></h1>
                            <h5>Call US:</h5>
                            <p>+8801740100570</p>
                            <p>+8801645578785</p>
                        </Col>
                        <Col>
                        <h1><FontAwesomeIcon icon={faPhone} /></h1>
                            <h5>Contact us</h5>
                            <p>Contact us for a quote. Help or join the team</p>
                            {/* <p><FontAwesomeIcon icon={faPiggyBank} /></p> */}
                        </Col>
                    </Row>
                </Col>
                <Col xs={6} >
                    <img className='contact-img center w-100' src={mapImage} alt="map" />
                </Col>
            </Row>
        </Container>
        </div>
    );
};

export default Contact;