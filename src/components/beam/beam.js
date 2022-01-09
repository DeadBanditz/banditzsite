import React from "react";
import { Row, Col, Container } from "react-bootstrap";

//import CSS
import './beam.css';

//import image assets

//import Component
import beamMember from './beammember';
class beam extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            beams: [
                {
                    image: "https://github.com/powerplantsnft/website/blob/main/pp1.jpeg?raw=true",
                    title: 'Tony Stark without the billions. On the rocks type of guy, chases with green juice for balance.',
                    name: "Muhani, Founder"
                },
                {
                    image: "https://github.com/powerplantsnft/website/blob/main/pp2.jpeg?raw=true",
                    title: 'Self-proclaimed crypto-genius. Jack of all trades. Lover of all things nature.',
                    name: "Thomas, Founder"
                },
                {
                    image: "https://github.com/powerplantsnft/website/blob/main/pp3.jpeg?raw=true",
                    title: 'Scared of heights but would love to go to space.',
                    name: "Alexander, Artist"
                },
                {
                    image: "https://github.com/powerplantsnft/website/blob/main/pp4.jpeg?raw=true",
                    title: 'Firm believer that the earth is flat. Avoids cliffs.',
                    name: "Emily, Social Media/Outreach"
                }, 
                {
                    image: "https://github.com/powerplantsnft/website/blob/main/pp5.jpeg?raw=true",
                    title: 'Developer by day, master chef by night.',
                    name: "Joseph, Developer"
                }
            ]
        }
    }

    render() {
        return (
            <div className='beam-control' id='beam'>
                <Container>
                    <header style={{fontStyle: "normal", color:"white"}}> TEAM MEMBERS </header>
                    <Row>
                        <Col className="beam-control-card" md={6} xs={12} >
                            <beamMember
                                imageUrl={this.state.beams[0].image}
                                title={this.state.beams[0].title}
                                name={this.state.beams[0].name}
                            />
                        </Col>
                        <Col className="" md={6} xs={12} >
                            <beamMember
                                imageUrl={this.state.beams[1].image}
                                title={this.state.beams[1].title}
                                name={this.state.beams[1].name}
                            />
                        </Col>
                    </Row> 
                    <Row>
                        <Col className="beam-control-card" md={4} xs={12} >
                            <beamMember
                                imageUrl={this.state.beams[2].image}
                                title={this.state.beams[2].title}
                                name={this.state.beams[2].name}
                            />
                        </Col>
                        <Col className="beam-control-card" md={4} xs={12} >
                            <beamMember
                                imageUrl={this.state.beams[3].image}
                                title={this.state.beams[3].title}
                                name={this.state.beams[3].name}
                            />
                        </Col>
                        <Col className="" md={4} xs={12} >
                            <beamMember
                                imageUrl={this.state.beams[4].image}
                                title={this.state.beams[4].title}
                                name={this.state.beams[4].name}
                            />
                        </Col>
                    </Row> 
                </Container>
            </div>
        );
    }
}

export default beam