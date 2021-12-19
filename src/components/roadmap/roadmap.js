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
                    tag: '0%',
                    title: "The Legend Begins",
                    content: "Join our Discord server, as we will be giving away 2 Dead Banditz NFT’s on launch and the best part of this giveaway is that you don’t even need to purchase a Dead Banditz NFT to win. These 2 Dead Banditz will be given away once our launch sale sells out and revealed with the complete collection."
                },
                {
                    tag: '20%',
                    title: "Bounty for The Legendary Dead Banditz",
                    content: "The Dead Banditz team will be giving away a total of $3,150,000USD worth of ETH. On reveal day, we will be giving away $1,150,000USD worth of ETH, $2,000,000USD worth of ETH will be rewarded by a lucky purchaser who mints our 1/1 Golden Gunz Gill, The Legendary Dead Banditz. *The $3,150,000 will be a crowd funded reward - The funds will be moved directly into the community account the second the mint surpasses this amount.* In addition to this giveaway, we will be giving away $15,000USD worth of ETH to 10 purchasers who mint 1 of the 10 Dead Banditz gang members. These will be a unique collection of 10 individually created NFTs. The remaining $1,000,000USD worth of ETH will be given away daily for the next 365 days, equalling $2,740USD worth of ETH per day. This will be given away in the exclusive Golden Gunz channel on our discord server. Charity Giveaway The Dead Banditz team will be donating $20,000USD to one of 5 charities that are being polled in our discord server, please go take your vote and we will be posting the donation to the discord on reveal day."
                },
                {
                    tag: '40%',
                    title: "Exclusive Discord Access",
                    content: "Golden Gunz: The exclusive channel in our discord will be only available to the holders of the Dead Banditz, here you will have exclusive to game designs, input of designs and access to giveaways of NFTs and ETH rewards.",
                    content2: "Band of Banditz: Each Dead Banditz NFT will have a marked item on a part of their clothing or body, this mark will also factor in with the rarity of each NFT, it will help identify the Band of Banditz you rep. Your mark will be a major part of our gameplay where you and your fellow banditz will be able raid towns of other banditz, rob their banks and loot their gear to gain higher rewards of $DSG (Dead Societies Gold)"
                },
                {
                    tag: '60%',
                    title: "Culture Kit",
                    content: "Dead Banditz Merch launch. We will be giving away 11 Dead Banditz Merch packs to the holders of the 11 Legendary Dead Banditz, this pack will contain 1 x Hoody, 1 x T-Shirt, 1 x Trucker Hat and an exclusive branded sticker pack, the winners will get these shipped anywhere in the world free of charge. We will have two payment types for our culture kits, you will be able to pay with FIAT or $DSG. Further information regarding this will be available later in Discord."
                },
                {
                    tag: '80%',
                    title: "Global VIP Recognition",
                    content: "We will be displaying a collection of our favourite Dead Banditz NFTs, in 3 Locations – Las Vegas, New York, Sydney and potentially London. When the collection is released into the advertising streams, we will be holding an exclusive event for all Dead Banditz holders in these locations. Your NFT will be your exclusive invite to these events."
                },
                {
                    tag: '100%',
                    title: "The Legend Lives On",
                    content: "Project 2 will begin development, This collection will be linked to the 1st project but will be a completely different series, and not Banditz. Project 2 will play a huge role in the creation of our game development, giving the Dead Bnaditz a united enemy to fight against. It will also be incremental to increasing the daily giveaway bonus and each holder of a Project 1, will receive a discounted mint price for Project 2."
                }
            ]
        }
    }

    render() {
        return (
            <div className='roadmap-control' id='roadmap' style={{ textAlign: "center", paddingTop: 50, paddingBottom: 50 }}>
                <Container style={{ backgroundColor: "black", padding: 30, border: "solid #E8B331 10px", borderRadius: 20 }}>
                    <header style={{ fontWeight: 900, color:"#E8B331" }}><span>DEADBANDITZ</span> <br/> ROADMAP</header>
                    <p className='roadmap-description'>
                        Welcome to the Dead Banditz Community.<br/>Now that you have jumped on the wagon, strap in for a life changing ride!
                    </p>
                    {/* <img  className="roadimage"style={{border:"solid 5px black", borderRadius: 20}}src="https://github.com/DeadBanditz/banditzsite/blob/main/src/assets/wood.png?raw=true" /> */}
                    <Row style={{ paddingTop: 30, alignContent: "center", justifyContent: "center", textAlign: "center" }}>
                        <Col style={{ color: "white", alignContent: "center", justifyContent: "center", textAlign: "center" }}>
                            {
                                this.state.roadmaps.map((item, index) => {
                                    return (
                                        <RoadMapItem style={{ textAlign: "center", color: "black" }} key={index}
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
                    <NewRoadMap />
                </Container>
            </div>

        );
    }
}

export default RoadMap;