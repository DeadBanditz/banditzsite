import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import AboutGif from '../../assets/Collection_GIF.gif';
import YButton from "../basic/YButton";

//import CSS
import './about.css';
class About extends React.Component {
    render() {
        return (
            <div id="about" className='about-control'>
                <Container>
                    <Row>
                        <Col md={6} xs={12} className='about-description'>
                            <header style={{ color: "#E8B331" }}>
                                <span style={{ color: "white" }}>9999</span> DEAD BANDITZ<br />
                                {/* <span style={{color: "white"}}>1</span> GAME. */}

                            </header>
                            <p style={{ color: "white" }}>
                                Way out west in the furthest reaches of the metaverse, there dwelt delinquents and exiles the likes of which you wouldn’t believe. Over time, the lawful societies of the metaverse forgot about these outcasts, continuing to prosper and growing beyond ancient memories. But the exiles never forgot, and as their communities descended further and further into reckless lawlessness, they developed a reputation as the wildest and roughest banditz in the Wild Wild West.                           </p>
                            <p style={{ color: "white" }}>
                                For years, they preyed on other towns, but soon greedy eyes turned back to the lawful realm that had exiled them in the first place. It was time for revenge, and they finally had the power to seize what they had craved for as long as they could remember.                         </p>
                            <p style={{ color: "white" }}>
                                The Great Battle of Banditz lasted for years without end. Countless lives were lost in the brutal raids of the metaverse, but on the very brink of victory, the banditz revealed their final, most dangerous weapon: a curse that would utterly corrupt their enemies and leave their lands ripe for plundering.                       </p>
                            <p style={{ color: "white" }}>
                                But there was a flaw in the curse, and when their mighty enchanter recited it incorrectly, the horrific effects were turned back upon the banditz. They were ruined where they stood, slain to the last man except for the enchanter himself. Alone and broken, he desperately searched for a way to return the banditz back to life. Solution after solution failed until he stumbled onto the most terrible of successes.              </p>
                            <p style={{ color: "white" }}>
                                The banditz returned, but not to the land of the living. Rawboned and cursed to the core, they shambled onward to seize the spoils that were denied them in life.
                                This is the legend of the cursed <text style={{ color: "#E8B331", fontSize: 18 }} className="asdf"> Dead Banditz.</text>
                            </p>

                            {/* <div><YButton text='COMING SOON' /></div> */}
                        </Col>
                        <Col md={6} xs={12} className='image-control'>
                            <img style={{ border: "solid black 10px", borderRadius: 20 }} src={AboutGif} alt='about gif' />
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default About;