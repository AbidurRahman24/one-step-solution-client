import { faFile, faHeadset, faScrewdriver, faTruck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Col, Container, Row } from 'react-bootstrap';
import './Artical.css'
const Artical = () => {
    const ArticalData = [
        {
            _id: 1,
            icon: <FontAwesomeIcon icon={faTruck} />,
            title: "Free Shipping",
            des: "We provide free global shipping so that you don't have to worry about the shipping"
        },
        {
            _id: 2,
            icon: <FontAwesomeIcon icon={faFile} />,
            title: "Split Your Payment",
            des: 'We support the samll startup company thats we have flexible 0% interest payment'
        },
        {
            _id: 3,
            icon: <FontAwesomeIcon icon={faScrewdriver} />,
            title: "International Warranty",
            des: 'All the product we provide has internation warranty so that the consumer can stay risk free'
        },
        {
            _id: 4,
            icon: <FontAwesomeIcon icon={faHeadset} />,
            title: "Global Support",
            des: 'Four our cunstomer we are aleays available for our customer so they can reach us anytime from anywhere'
        }
    ]
    return (
        <div className="artical-container">
            <div className="artical-header">
                <h2>WHY CHOSE US</h2>
            </div>
            <Container className="artical-body">
            <Row>
                {
                    ArticalData.map(data => (
                        <Col sm style={{color:'white'}}>
                            <h2 style={{color: "#08B9FF"}}>{data.icon}</h2>
                            <h4 >{data.title}</h4>
                            <p>{data.des}</p>
                        </Col>
                    ))
                }
            </Row>
            </Container>
        </div>
    );
};

export default Artical;