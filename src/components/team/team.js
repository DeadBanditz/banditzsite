import React from "react";
import { Row, Col, Container } from "react-bootstrap";

//import CSS
import './team.css';

//import image assets
// import CEOImage from '../../assets/team/about.gif';
// import CTOImage from '../../assets/team/about.gif';
// import CMOImage from '../../assets/team/about.gif';
// import CFOImage from '../../assets/team/about.gif'

//import Component
import TeamMember from "./teammember";
class Team extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            teams: [
                {
                    image: "https://raw.githubusercontent.com/DeadBanditz/banditzsite/main/src/assets/topitems/1.jpg",
                    title: 'CO-FOUNDER & Promotions',
                    name: "Dutch “ThirdDegree” Tannen"
                },
                {
                    image: "https://raw.githubusercontent.com/DeadBanditz/banditzsite/main/src/assets/topitems/3.jpg",
                    title: 'CO-FOUNDER',
                    name: "Big Mack Whitty"
                },
                {
                    image: "https://raw.githubusercontent.com/DeadBanditz/banditzsite/main/src/assets/topitems/2.jpg",
                    title: 'Blockchain & Web3',
                    name: "Metaverse Sean"
                },
                {
                    image: "https://raw.githubusercontent.com/DeadBanditz/banditzsite/main/src/assets/topitems/4.jpg",
                    title: 'Graphic Designer & Artist',
                    name: "Buck Carson"
                }, 
                {
                    image: "https://raw.githubusercontent.com/DeadBanditz/banditzsite/main/src/assets/topitems/8.jpg",
                    title: 'Blockchain Genius',
                    name: "Clay Bowie"
                },
                {
                    image: "https://raw.githubusercontent.com/DeadBanditz/banditzsite/main/src/assets/topitems/6.jpg",
                    title: 'Marketing & Community Manager',
                    name: "Hot Fire Barrelz"
                },
                {
                    image: "https://raw.githubusercontent.com/DeadBanditz/banditzsite/main/src/assets/topitems/7.jpg",
                    title: 'Discord Manager',
                    name: "Colt Cassidy"
                }, 
                {
                    image: "https://raw.githubusercontent.com/DeadBanditz/banditzsite/main/src/assets/topitems/5.jpg",
                    title: 'Financial Operations',
                    name: "Jackknife Jones"
                }
            ]
        }
    }

    render() {
        return (
            <div className='team-control' id='team'>
                <Container>
                    <header style={{fontStyle: "italic", color:"white"}}> TEAM MEMBERS </header>
                    <Row>
                        <Col className="team-control-card" md={6} xs={12} >
                            <TeamMember
                                imageUrl={this.state.teams[0].image}
                                title={this.state.teams[0].title}
                                name={this.state.teams[0].name}
                            />
                        </Col>
                        <Col className="" md={6} xs={12} >
                            <TeamMember
                                imageUrl={this.state.teams[1].image}
                                title={this.state.teams[1].title}
                                name={this.state.teams[1].name}
                            />
                        </Col>
                    </Row> 
                    <Row>
                        <Col className="team-control-card" md={4} xs={12} >
                            <TeamMember
                                imageUrl={this.state.teams[2].image}
                                title={this.state.teams[2].title}
                                name={this.state.teams[2].name}
                            />
                        </Col>
                        <Col className="team-control-card" md={4} xs={12} >
                            <TeamMember
                                imageUrl={this.state.teams[3].image}
                                title={this.state.teams[3].title}
                                name={this.state.teams[3].name}
                            />
                        </Col>
                        <Col className="" md={4} xs={12} >
                            <TeamMember
                                imageUrl={this.state.teams[4].image}
                                title={this.state.teams[4].title}
                                name={this.state.teams[4].name}
                            />
                        </Col>
                        <Col className="team-control-card" md={4} xs={12} >
                            <TeamMember
                                imageUrl={this.state.teams[5].image}
                                title={this.state.teams[5].title}
                                name={this.state.teams[5].name}
                            />
                        </Col>
                        <Col className="team-control-card" md={4} xs={12} >
                            <TeamMember
                                imageUrl={this.state.teams[6].image}
                                title={this.state.teams[6].title}
                                name={this.state.teams[6].name}
                            />
                        </Col>
                        <Col className="" md={4} xs={12} >
                            <TeamMember
                                imageUrl={this.state.teams[7].image}
                                title={this.state.teams[7].title}
                                name={this.state.teams[7].name}
                            />
                        </Col>
                    </Row> 
                </Container>
            </div>
        );
    }
}

export default Team