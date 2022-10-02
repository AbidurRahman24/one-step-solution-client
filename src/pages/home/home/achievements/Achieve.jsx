import { faComputer, faCopyright, faEarthAfrica, faFlag, faSmile } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faFaceSmile } from '@fortawesome/fa-face-smile'
import CountUp from 'react-countup';
import { Col, Container, Row } from "react-bootstrap";
import './Achieve.css'
const Achieve = () => {
    const AchieveData = [
        {
            _id: 1,
            icon: <FontAwesomeIcon icon={faSmile} />,
            num: <CountUp  start={60} end={100} />,
            title: "Happy Client"
        },
        {
            _id: 2,
            icon: <FontAwesomeIcon icon={faFlag} />,
            num: <CountUp  start={5} end={35}  />,
            title: "Country Reached"
        },
        {
            _id: 3,
            icon: <FontAwesomeIcon icon={faCopyright} />,
            num: <CountUp  start={0} end={9}  />,
            title: "Connected Brands"
        },
        {
            _id: 4,
            icon: <FontAwesomeIcon icon={faComputer} />,
            num: <CountUp  start={10} end={35}  />,
            title: "Unique Product"
        }
    ]
    return (
        <div className="achive-container">
            <div className="achive-header">
                <h2>OUR ACHIEVEMENTS</h2>
            </div>
            <Container className="achive-body">
            <Row >
                {
                    AchieveData.map(data => (
                        <Col sm style={{color:'white'}}>
                            <h2 style={{color: "#08B9FF"}}>{data.icon}</h2>
                            <h2 >{data.num}+</h2>
                            <h4 >{data.title}</h4>
                        </Col>
                    ))
                }
            </Row>
            </Container>
        </div>
    );
};

export default Achieve;