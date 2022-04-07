import React from "react";
import { Col, Container, Row } from "react-bootstrap";

//import CSS
import './roadmap.css';
import NewRoadMap from '../newroadmap/newroadmap';

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
                    tag: '0% - Q2',
                    title: "Launch",
                    content: "The Dead Banditz NFT collection will be released in 3 stages, the releases will be tiered with limited NFTs sold in these 3 stages, they will be released as is below:",
                    content2: "1999 Dead Banditz – 0.075 ETH - Reveal 48 hours after selling out",
                    content3: "2999 Dead Banditz – 0.085 ETH - Reveal 48 hours after selling out",
                    content4: "5001 Dead Banditz – 0.095 ETH - Reveal 48 hours after selling out"
                },
                {
                    tag: '20% - Q2',
                    title: "Dead Banditz Bounty",
                    content: "There are 11 unique Legendary Dead Banditz scattered throughout the collection of 9999 NFTs, these legends will reward minters with an ETH bonus – these bonuses will range from $2,500 to $10,000 totalling $47,500 – this is a community funded reward – the pool of funds for this will come from the sale of the Dead Banditz NFTs.",
                    content2: "*The Bonuses will be paid once the final 1/1 Dead Banditz NFT is minted and revealed. *"
                    
                },
                {
                    tag: '40% - Q2',
                    title: "Charity Giveaway",
                    content: "The Dead Banditz gang will be donating $5,000USD to one of 5 charities that are being polled in our discord server, please go take your vote and we will be paying the $5,000USD to the charity that has the most votes.",
                    content2: "*This will be paid once the collection is sold out and confirmation will be posted in the announcements channel in our discord*"
                    
                },
                {
                    tag: '60% - Q3',
                    title: "Book of the Dead",
                    content: "If are you are lucky enough to obtain a page from the “Book of The Dead” you will have a hard decision to make, you can either hold your page, resell your page or read from the “Book of the Dead”",
                    content2: "If you dare to read your page, you will resurrect a Dead Bandit from his curse, by doing this you will receive a 1:1 from a 3750 limited collection of exclusive Resurrected Dead Banditz NFTs."
                },
                {
                    tag: '80% - Q4',
                    title: "Resurrection",
                    content: "We will be advertising a selection of our 10 favourite Dead Banditz in 3 locations of the United States and Australia- New York, Las Vegas and Sydney. Once the collection is released to minters and advertising streams, we will be holding exclusive shootout events for all Dead Banditz members in these locations, if your Dead Bandit is selected as a favourite, you will be invited to the shootout events with an expense paid trip to the location where you Dead Bandit will be advertised and displayed. ",
                    content2: "Having a Dead Bandit in your OpenSea account will also be your invite to access the exclusive shootout events.",
                    content3: "We have some serious things planned for these events including super car racing, nightclub VIP parties, private box tickets to NBA, NFL and other events."
                },
                {
                    tag: '100%',
                    title: "Banditz Staking",
                    content: "Once we have reached this phase of our roadmap, we will begin to implement Dead Banditz staking, which will reward holders with $DSG, Dead Societies Gold is our currency that will become a tradable currency, this will be the final step of Roadmap 1.0."
                },
                {
                    tag: 'Roadmap 2.0',
                    title: "A Legend Never Dies",
                    content: "Roadmap 2.0 will begin, which is development of our P2E mobile app game and a second collection of Dead Societies NFTs.",
                    content2: "Our play to earn mobile gaming app will be an app that challenges speed and accuracy where you will go up against other users around the world, you will gain points for these defeating other players with these attributes which will rank you up – ranking in the top 100 will give you rewards of $DSG and the higher you rank the more you earn, you will be able to earn $DSG which will give you the ability to purchase upgrades in game or use to sell for other cryptocurrencies.",
                    content3: "$DSG – Dead Societies Gold will be given to the holders of Dead Banditz NFTs before public release. More development updates will come for $DSG as we progress through our roadmap 1.0 and reach this stage of dev.",
                    content4: "We will begin designing our next NFT rollout – more to come soon."
                }
            ]
        }
    }

    render() {
        return (
            <div className='roadmap-control' id='roadmap' style={{ paddingTop: 50, paddingBottom: 50 }}>
                <Container style={{ backgroundColor: "black", padding: 30, border: "solid #E8B331 10px", borderRadius: 20, textAlign: "center" }}>
                    <header style={{ fontWeight: 900, color: "#E8B331" }}><span>DEAD BANDITZ</span> <br /> ROADMAP</header>
                    <p className='roadmap-description' style={{ maxWidth: 1000, margin: "auto" }}>
                        <text></text>Welcome to the <text style={{ color: "#E8B331", fontSize: 18 }} className="asdf">Dead Banditz</text> Community.<br />
                        Our roadmap is very clear and precise, we aren’t promising the world, but we are promising
                        future utility and development to increase your investment into the <text style={{ color: "#E8B331", fontSize: 18 }} className="asdf">Dead Banditz</text> Project.
                    </p>
                    {/* <img  className="roadimage"style={{border:"solid 5px black", borderRadius: 20}}src="https://github.com/DeadBanditz/banditzsite/blob/main/src/assets/wood.png?raw=true" /> */}
                    <Row style={{ paddingTop: 30 }}>
                        <Col style={{ color: "white" }}>
                            {
                                this.state.roadmaps.map((item, index) => {
                                    return (
                                        <RoadMapItem style={{ color: "black" }} key={index}
                                            tag={item.tag}
                                            title={item.title}
                                            content={item.content}
                                            content2={item.content2}
                                            content3={item.content3}
                                            content4={item.content4}
                                            content5={item.content5}
                                            content6={item.content6}
                                        />
                                    );
                                })
                            }
                        </Col>
                    </Row>
                    {/* <NewRoadMap /> */}
                </Container>
            </div>

        );
    }
}

export default RoadMap;