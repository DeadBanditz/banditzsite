import React from "react";
import { Col, Container, Row } from "react-bootstrap";

//import CSS
import './roadmap.css';

//import Assets
import roadmap from '../../assets/Roadmap.mp4';

//import Component
import RoadMapItem from "./roadmapitem";
class RoadMap extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            roadmaps: [
                {
                    tag: 'Phase 1',
                    title: "Lorem Ipsum",
                    content: "Lorem Ipsum"
                },
                {
                    tag: 'Phase 2',
                    title: "Lorem Ipsum",
                    content: "Lorem Ipsum"
                },
                {
                    tag: 'Phase 3',
                    title: "Lorem Ipsum",
                    content: "Lorem Ipsum"
                },
                {
                    tag: 'Phase 4',
                    title: "Lorem Ipsum",
                    content: "Lorem Ipsum"
                },
                {
                    tag: 'Phase 5',
                    title: "Lorem Ipsum",
                    content: "Lorem Ipsum"
                },
                {
                    tag: 'Phase 6',
                    title: "Lorem Ipsum",
                    content: "Lorem Ipsum"
                },
                {
                    tag: 'Phase 7',
                    title: "Lorem Ipsum",
                    content: "Lorem Ipsum"
                },
                {
                    tag: 'Phase 8',
                    title: "Lorem Ipsum",
                    content: "Lorem Ipsum"
                }
            ]
        }
    }

    render() {
        return (
            <div className='roadmap-control' id='roadmap' style={{ textAlign: "center" }}>
                <Container style={{ backgroundColor: "#172A55", padding: 30, border: "solid black 10px", borderRadius: 20 }}>
                    <header style={{ fontWeight: 900 }}><span>CHECK OUT OUR</span> <br /> ROADMAP</header>
                    <p className='roadmap-description'>
                        Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum.
                    </p>
                    <Row style={{ alignContent: "center", justifyContent: "center", textAlign: "center" }}>
                        <Col xs={12} md={6}>
                            <img  className="roadimage"style={{border:"solid 10px black", borderRadius: 20}}src="https://cdn.dribbble.com/users/35633/screenshots/7704871/media/7b62d4238bb104a065dfeaf8a91a14bb.png?compress=1&resize=800x600" />
                        </Col>
                        <Col style={{ color: "white", alignContent: "center", justifyContent: "center", textAlign: "center" }}>
                            {
                                this.state.roadmaps.map((item, index) => {
                                    return (
                                        <RoadMapItem style={{ textAlign: "center", color: "black" }} key={index}
                                            tag={item.tag}
                                            title={item.title}
                                            content={item.content} />
                                    );
                                })
                            }
                        </Col>
                    </Row>
                </Container>
            </div>

        );
    }
}

export default RoadMap;