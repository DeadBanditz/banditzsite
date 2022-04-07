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
                                In the furthest reaches of the wild west of the Metaverse, where the tumbleweeds blow and the cowboys ride, there lived exiles and delinquents – the likes of which you wouldn’t believe. They were the worst <text style={{ color: "#E8B331", fontSize: 18 }} className="asdf">Banditz</text> imaginable, they were Known for ferociously raiding villages all their riches and the loot was legendary, and they were the fastest gunslingers known to mankind. They were also feared for their dark magic, any being who challenged them was cursed to live an eternal life as one of them – emotionless, chaotic, and dreaded.
                                <br /><br />

                                After many years of this life, the <text style={{ color: "#E8B331", fontSize: 18 }} className="asdf">Banditz</text> slowly started to collapse as the dark magic that they swore themselves to and practiced relentlessly took on a life of its own and began to betray them. In desperation, and as they sought to retain their powers – they banded together to cast one final curse to protect themselves as the remaining <text style={{ color: "#E8B331", fontSize: 18 }} className="asdf">Banditz</text>.  They entrapped the remaining dark magic in a cast iron journal to be hidden away from all existence, but the Banditz did not realise that by doing this it would send them to their graves – cut down where they stood and wiped from existence.<br /><br />

                                After many years had passed, and the stories of the <text style={{ color: "#E8B331", fontSize: 18 }} className="asdf">Banditz</text> had gone from the stuff of legends to all but forgotten, a discovery was made, a cast iron journal was found buried deep in the darkest reaches of the MetaVerse. The first line in the journal read, For they who read the <text style={{ color: "#E8B331", fontSize: 18 }} className="asdf">Book of the Dead</text>, will be cursed to walk this earth as we did, not in the form of living but raw-boned and cursed to the core and for one purpose, to resurrect us, to resurrect us all, the <text style={{ color: "#E8B331", fontSize: 18 }} className="asdf">Dead Banditz</text>. <br/>Signed - <text style={{ color: "#E8B331", fontSize: 18 }} className="asdf">Golden Gunz</text>
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