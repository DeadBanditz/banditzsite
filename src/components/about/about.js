import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import AboutGif from '../../assets/Collection_GIF.gif';
import YButton from "../basic/YButton";

//import CSS
import './about.css';
class About extends React.Component {
    render() {
        return (
            <div className='about-control'>
                <Container>
                    <Row>
                        <Col md={6} xs={12} className='about-description'>
                            <header style={{ color: "#E8B331" }}>
                                <span style={{ color: "white" }}>9999</span> DEAD BANDITZ.<br />
                                {/* <span style={{color: "white"}}>1</span> GAME. */}

                            </header>
                            <p style={{ color: "white" }}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.                            </p>
                            <p style={{ color: "white" }}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.                            </p>

                            {/* <div><YButton text='COMING SOON' /></div> */}
                        </Col>
                        <Col md={6} xs={12} className='image-control'>
                            <img style={{ border: "solid black 10px", borderRadius: 20 }} src={"https://cdn.discordapp.com/attachments/914634855709560862/920797475256799322/IMG_1411.gif"} alt='about gif' />
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default About;