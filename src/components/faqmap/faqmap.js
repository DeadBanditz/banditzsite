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
                    tag: 'Q1 2022',
                    title: "What are Dead Banditz?",
                    content: "The Dead Banditz project is a collection of 10,000 unique western styled banditz, that will live on the blockchain as an NFT. The Dead Banditz collection will have a game developed around these unique digital artworks, which will be a game of strategy, raiding, looting, bounty hunting for other Dead Banditz which will reward holders with our $DSG currency."
                },
                {
                    tag: 'Q2 2022',
                    title: "When does minting go live, is there a Presale?",
                    content: "The public sale will take place on 01/14/2022 beginning at 8PM (GMT-5). A pre sale will take place on the 01/13/2022 and will begin at 7PM (GMT-5) for O.G mint pass members and 8PM (GMT-5) for whitelist members."
                },
                {
                    tag: 'Ever going (Early Q1 commencement)',
                    title: "How do I win the $2,000,000 USD worth of ETH giveaway?",
                    content: "To be eligible to recieve the $2,000,000USD ETH reward, you must purchase one Dead Banditz NFT from our pre sale or mint sale, one NFT is one opportunity to win, the more you purchase the more chances you have.",
                    content2: "The winner of this gigantic reward, will receive $2,000,000USD worth of ETH and it will be paid to the winner if the collection sells out before the reveal event, the reveal will take place 48 hours after the main sale.",
                    content3: "The lucky person who mints ‘Golden Gunz Gill’ our 1/1 infamous Banditz leader, will need to contact us via email at shoot@deadbanditz.io (email communication is to ensure the identity of the winner is private and to protect the wallet of the winner, only the winner and the owners will communicate and a verification process will take place to guarantee ownership & security) to verify the wallet they would like the $2,000,000 USD ETH reward paid out too.",
                    content4: "*if the Golden Gunz Gill NFT is sold before reveal the person who sells it before reveal is not eligible to receive the reward, only the person that has ownership at time of reveal."
                },
                {
                    tag: 'Q3 2022',
                    title: "How do I even buy an NFT?",
                    content: "We will provide a step by step guide on how to purchase a Dead Banditz NFT on our discord channel *How to buy*",
                    content2: "If you miss out purchasing on the pre sale or main sale, you may be lucky to enough to buy a Dead Banditz NFT from OpenSea, our recommended secondary marketplace. (This also might be challenging considering we are giving each holder a chance to be reward $2,740 USD worth of ETH each day for a year just simply by holding the NFT)"
                },
                {
                    tag: 'Q4 2022',
                    title: "How much will each Dead Bandit cost?",
                    content: "The price is 0.3 ETH + gas."
                },
                {
                    tag: 'Q4 2022',
                    title: "How much will Royalties be?",
                    content: "Royalties will be 10% (Dead Banditz) + 2.5 % (Opeansea) for a total of 12.5%. This is to try and deter any flippers early on. One week after the Dead Banditz collection is revealed, the royalties will move to 7.5% (Dead Banditz) + 2.5% (Opensea) for a total of 10%. Once the first week has passed and the royalties have gone down, 4% of the Dead Banditz royalties from each sale will be put back into the community fund to ensure our community is one of the most lucrative for investors."
                },
                {
                    tag: 'Q4 2022',
                    title: "How many can I buy at once?",
                    content: "If you are an O.G member (150 members only) you will receive a pass that allows you to purchase up to 5 Dead Banditz per transaction with a MAX wallet hold of 20, O.G members will gain one hour early access the pre sale event. During the pre sale you will be able to purchase up to 10 Dead Banditz NFTs per transaction. Once the public sale has commenced you will be able to mint up to 10 Dead Banditz NFTs per transaction with a max wallet capacity of 100. Our $2,000,000USD ETH reward is sure to change the life of the lucky winner, so do not let this opportunity pass you by."
                },
                {
                    tag: 'Q4 2022',
                    title: "What is an O.G Mint pass & other passes?",
                    content: "The O.G mint pass will be rewarded to the first 150 members of our discord server. The holder of an O.G mint pass will be be able to access our pre sale one hour before the remaining whitelist members will get access to the pre sale event.",
                    content2: "You will have an opportunity to mint up to and no more of 5 Dead Banditz NFTs per transaction with a wallet maximum of 20 Dead Banditz in the one hour early access period, you will then be able to mint up to 10 in the pre sale and public sale.",
                    content3: "There will be a whitelist for members of the discord who reach level 10 by inviting up to 10 people to the discord server. (non of this spamming chat nonsense)",
                    content4: "If you hate waiting and want to obtain a whitelist pass then we will be selling a pre sale mint pass for 0.05ETH – funds from this will be put towards the community fund for future promotions, giveaways and games for our “GOLDEN GUNZ” (only available to holders of a Dead Banditz NFT)"
                },
                {
                    tag: 'Q4 2022',
                    title: "How many Dead Banditz are there? will you be holding any?",
                    content: "There will be 10,000 Dead Banditz in total, 9,900 will be available. We will be holding 100 Dead Banditz to give to friends/family, rewards for community members and for promotional giveaways, we will not have access to the 100 held Dead Banditz, by saying this we will have no knowledge of what these NFTs will be, if by chance any of the 11 Legendary Dead Banditz are in these 100, we will be putting funds directly into the community fund and $2,740USD ETH reward will be increased depending on the amount that is put back into the community fund, for example here are two scenarios, if “Golden Gunz Gill” is in the 100 NFTs held back, our $2,000,000 worth of ETH will be left in the community fund and the 365 day reward will increase to $8,219USD worth of ETH per day instead of the previously advised amount of $2,740USD worth of ETH per day. If we have one of the ten Legendary Dead Banditz which consists of a $15,000USD worth of ETH reward, this amount will be left in the community fund and the daily reward will increase from $2,740USD worth of ETH to $2,780USD worth of ETH."
                },
                {
                    tag: 'Q4 2022',
                    title: "Will I see my Dead Banditz NFT straight after I purchase from your website?",
                    content: "No, the Dead Banditz collection will be revealed 48 hours after the public sale. Your Dead Banditz NFT will be viewable from 01/16/2022 @ 8PM (GMT-5) on OpenSea."
                },
                {
                    tag: 'Q4 2022',
                    title: "Why would I buy a Dead Banditz NFT anyway?",
                    content: "Minting a Dead Banditz NFT, will grant you exclusive access to our “GOLDEN GUNZ” channel in our discord server, access to this group will grant you an opportunity to be apart of our daily giveaway of $2,740USD worth of ETH.",
                    content2: "This giveaway will be reward one time per day for 365 days.",
                    content3: " The community fund will contain $1,000,000USD worth of ETH (after the $2,150,000 has been given to winners) which will come directly from the sale of collection one and the contract for these funds will be publicly visible by viewing our official links channel in discord. After the giveaway these funds will support the longevity of the giveaway.",
                    content4: " You will also have early access to the next 4 collections that Dead Societies (company) will be releasing, these 4 collections will all be patches for the game that is being developed.",
                    content5: " We may continue to carry on the giveaway past the 365 days, as a percentage of the dead banditz resale royalties will be paid directly into the community fund to allow us to continue the growth of the project and develop further collections under this branding."
                },
                {
                    tag: 'Q4 2022',
                    title: "What rights do I have to my Dead Banditz NFT?",
                    content: "You own your Dead Banditz NFT and have full commercial rights to your NFT. You can do whatever you like with it for as long as you own the NFT. You could create and sell merch, you can create derivatives. The only thing you don’t have the rights to is the Dead Banditz or Dead Societies branding and logo."
                }
            ]
        }
    }

    render() {
        return (
            <div className='roadmap-control' id='roadmap' style={{ textAlign: "center", backgroundColor: "black", backgroundImage: "none" }}>
                <Container style={{ backgroundColor: "black", paddingTop: 100 }}>
                    <header style={{fontStyle: "normal", color:"white" }}><span></span> <br/> FAQ's</header>
                    <Row style={{ paddingTop: 0, alignContent: "center", justifyContent: "center", textAlign: "center" }}>
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
                </Container>
            </div>

        );
    }
}

export default RoadMap;