import React from "react";
import { Col, Container, Row } from "react-bootstrap";

//import CSS
import './faqmap.css';

//import Assets
import roadmap from '../../assets/Roadmap.mp4';

//import Component
import RoadMapItem from "./faqmapitem";
class RoadMap extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            roadmaps: [
                {
                    tag: '1',
                    title: "What are Dead Banditz?",
                    content: "Dead Banditz are a collection of 9999 unique western banditz that will live on the blockchain as a Non Fungible Token."
                },
                {
                    tag: 'Ever going (Early Q1 commencement)',
                    title: "Is there a website?",
                    content: "https://deadbanditz.io/"
                },
                {
                    tag: 'Q3 2022',
                    title: "When does minting go live?",
                    content: "TBA"
                },
                {
                    tag: 'Q4 2022',
                    title: "How does the ETH Bonus work?",
                    content: "To be eligible to receive an ETH bonus you must mint 1 Dead Banditz NFT to have the chance to receive an ETH bonus – the more Dead Banditz you own the mare chances you have to get the bonus – who ever mints one of our unique Dead Banditz will get an ETH bonus, which is mentioned on our website on each “WANTED” poster."
                },
                {
                    tag: 'Q4 2022',
                    title: "How much will each Dead Bandit cost?",
                    content: "The price for one Dead Banditz NFT will vary from 0.075 to 0.095 depending on which stage you purchase, we have a 3 stage sale process.   ",
                    content2: "1st STAGE: 1999 Dead Banditz NFTs @ 0.075 ETH + GAS will be made available.",
                    content3: "2nd STAGE: 2999 Dead Banditz NFTs @ 0.085 ETH + GAS will be made available.",
                    content4: "3rd and FINAL STAGE: 5001 Dead Banditz NFTs @ 0.095 ETH + GAS will be made available."
                },
                {
                    tag: 'Q4 2022',
                    title: "How much will Royalties be?",
                    content: "Royalties will be 7.5% (Dead Societies) + 2.5 % (Opeansea) for a total of 10%. This is to try and deter any flippers early on. 1 week after the reveal event, the royalties will move to 6% (Dead Societies) + 2.5% (Opensea) for a total of 8.5%."
                },
                {
                    tag: 'Q4 2022',
                    title: "How many can I buy at once?",
                    content: "Each stage of sales will have a set limit of Dead Banditz NFTs available to one wallet address.",
                    content2: "1st Stage - 10 NFTs per wallet.",
                    content3: "2nd Stage - 20 NFTs per wallet.",
                    content4: "3rd Stage - 30 NFTs per wallet."                  
                },
                {
                    tag: 'Q4 2022',
                    title: "Will there be a WhiteList?",
                    content: "No, we have decided to make this a public sale as a first in first served basis, if you mint at 0.075 ETH then you will save ETH."
                },
                {
                    tag: 'Q4 2022',
                    title: "How many Dead Banditz are there? will you be holding any?",
                    content: "There will be 9999 Dead Banditz in total, we are not holding any NFTs, we will be purchasing ourselves, like everyone else."
                },
                {
                    tag: 'Q4 2022',
                    title: "Will I see my Dead Banditz NFT straight after I purchase from your website?",
                    content: "No, the Dead Banditz will be revealed 48 hours after each stage of sale."
                },
                {
                    tag: 'Q4 2022',
                    title: "What rights do I have to my Dead Banditz NFT?",
                    content: "YYou own your Dead Banditz NFT and have full commercial rights to your NFT. You can do whatever you like with it for as long as you own the NFT. You could create and sell merch, you can create derivatives. The only thing you don&#39;t have the rights to is the Dead Banditz or Dead Societies branding and logo."
                }
            ]
        }
    }

    render() {
        return (
            <div className='roadmap-control' id='roadmap' style={{ backgroundColor: "black", backgroundImage: "none" }}>
                <Container style={{ backgroundColor: "black", paddingTop: 100 }}>
                    <header style={{fontStyle: "normal", color:"white", textAlign: "center" }}><span></span> <br/> FAQ's</header>
                    <Row style={{ paddingTop: 0}}>
                        <Col>
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
                </Container>
            </div>

        );
    }
}

export default RoadMap;