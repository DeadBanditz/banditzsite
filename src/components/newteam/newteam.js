import React from "react";

import "./newteam.css";
import TeamMember from "./newteamMember";

import team1 from "../../assets/owl.png";
import team2 from "../newteam/team/Chibi Labs.jpeg";
import team3 from "../newteam/team/Chibi Labs.jpeg";
import team4 from "../newteam/team/Chibi Labs.jpeg";
import team5 from "../newteam/team/Chibi Labs.jpeg";
import team6 from "../newteam/team/Chibi Labs.jpeg";
import team7 from "../newteam/team/Chibi Labs.jpeg";
import team8 from "../newteam/team/Chibi Labs.jpeg";
import team9 from "../newteam/team/Chibi Labs.jpeg";
class Team extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            members: [
                {
                    img: "https://raw.githubusercontent.com/DeadBanditz/banditzsite/main/src/assets/topitems/1.jpg",
                    title: "Dutch “ThirdDegree” Tannen ",
                    job: "CO-FOUNDER & Promotions"
                    // des: "10+ Years in Music, 6+ Years in Crypto, & 1,000+ Years in Space.",
                    // skills: "Music Production, Graphic Design, & Space Travel.",
                    // planet: "EARTH"

                },
                {
                    img: "https://raw.githubusercontent.com/DeadBanditz/banditzsite/main/src/assets/topitems/3.jpg",
                    title: "Big Mack Whitty",
                    job: "CO-FOUNDER",
                    // des: "6+ Years in Software Development, 4+ Years in Crypto.",
                    // skills: "Solidity, Web Development, & Drumming.",
                    // planet: "NEPTUNE"

                },
                {
                    img: "https://raw.githubusercontent.com/DeadBanditz/banditzsite/main/src/assets/topitems/2.jpg",
                    title: "Metaverse Sean",
                    job: "Web Design",
                    // des: "20+ Years In Business & High-Tech, 6+ Years In Crypto.",
                    // skills: "Sales, Tech Implementations, Social Influence, & Surfing.",
                    // planet: "MARS"

                },
                {
                    img: "https://raw.githubusercontent.com/DeadBanditz/banditzsite/main/src/assets/topitems/4.jpg",
                    title: "Buck Carson",
                    job: "Graphic Designer & Artist",
                    // des: "15+ Years in Business & Creative Design, 6+ Years in Crypto.",
                    // skills: "Creative Design, User Experience, & Singing.",
                    // planet: "VENUS"

                },
                {
                    img: "https://raw.githubusercontent.com/DeadBanditz/banditzsite/main/src/assets/topitems/5.jpg",
                    title: "Clay Bowie",
                    job: "Blockchain Genius",
                    // des: "25+ Years in Finance, 6+ Years in Crypto.",
                    // skills: "Finance & Accounting, IT Security, & Golf.",
                    // planet: "URANUS"

                },
                {
                    img: "https://raw.githubusercontent.com/DeadBanditz/banditzsite/main/src/assets/topitems/6.jpg",
                    title: "Hot Fire Barrelz",
                    job: "Marketing & Community Manager",
                    // des: "5+ Years in Social Work, 6+ Years in Crypto.",
                    // skills: "Social Consciousness, Inspiration, & Meditation.",
                    // planet: "JUPITER"

                },
                {
                    img: "https://raw.githubusercontent.com/DeadBanditz/banditzsite/main/src/assets/topitems/7.jpg",
                    title: "Colt Cassidy",
                    job: "Discord Manager",
                    // des: "5+ Years in Social Work, 6+ Years in Crypto.",
                    // skills: "Social Consciousness, Inspiration, & Meditation.",
                    // planet: "JUPITER"

                },
                {
                    img: "https://raw.githubusercontent.com/DeadBanditz/banditzsite/main/src/assets/topitems/8.jpg",
                    title: "Jackknife Jones",
                    job: "Financial Operations",
                    // des: "5+ Years in Social Work, 6+ Years in Crypto.",
                    // skills: "Social Consciousness, Inspiration, & Meditation.",
                    // planet: "JUPITER"

                }
            ]
        }
    }
    render() {
        return (
            <div id="team" style={{backgroundColor: "black"}}>
                <div className="g-relative team-layout " id="team" style={{maxWidth: 1000}}>
                    <div className="team-title sm:text-5xl" style={{ textAlign: "center", paddingLeft: 30, marginBottom: 0, paddingBottom: 40, paddingTop: 40 }}>
                        <span>THE GANG</span>
                    </div>
                    <div className="g-flex-justify-center">
                        <div>
                            <ul className="team-member-layout" style={{ listStyle: "none" }}>
                                {
                                    this.state.members.map((item, index) => {
                                        return (
                                            <li>
                                                <TeamMember
                                                    skills={item.skills}
                                                    planet={item.planet}
                                                    job={item.job}
                                                    img={item.img}
                                                    title={item.title}
                                                    des={item.des}
                                                    twitter={item.twitter}
                                                    opensea={item.opensea}
                                                />
                                            </li>
                                        )
                                    })
                                }

                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Team;