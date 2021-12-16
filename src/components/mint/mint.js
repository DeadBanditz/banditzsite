import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

//import Assets
import MintGif from '../../assets/Collection_GIF.gif';
import YButton from "../basic/YButton";

import { BsFileMinusFill, BsFilePlusFill } from 'react-icons/bs';

//import CSS
import './mint.css';
import { useDispatch, useSelector } from "react-redux";
import { connect } from "../../redux/blockchain/blockchainActions";
import { fetchData } from "../../redux/data/dataActions";
function Mint() {
    const dispatch = useDispatch();
    const blockchain = useSelector((state) => state.blockchain);
    const data = useSelector((state) => state.data);
    const [feedback, setFeedback] = useState("");
    const [claimingNft, setClaimingNft] = useState(false);
    const [mintNum, setMintNum] = useState(0)
    const claimNFTs = (_amount) => {
        _amount = document.getElementById("inputBox").textContent;
        if (_amount <= 0) {
            return;
        }
        setFeedback("Minting your Official BooCrew NFT...");
        setClaimingNft(true);
        blockchain.smartContract.methods
            .mint(blockchain.account, _amount)
            // ********
            // You can change the line above to
            // .whiteListMint(blockchain.account, _amount) if you want only whitelisted
            // users to be able to mint through your website!
            // And after you're done with whitelisted users buying from your website,
            // You can switch it back to .mint(blockchain.account, _amount).
            // ********
            .send({
                gasLimit: 285000 * _amount,
                to: "0x7181d2038B849A18145eb153b8bEFC552e52c37A", // the address of your contract
                from: blockchain.account,
                value: blockchain.web3.utils.toWei((0.077 * _amount).toString(), "ether"),
            })
            .once("error", (err) => {
                console.log(err);
                setFeedback("Sorry, something went wrong. Check your transaction on Etherscan to find out what happened!");
                setClaimingNft(false);
            })
            .then((receipt) => {
                setFeedback(
                    "Your BooCrew NFT has been successfully minted!"
                );
                setClaimingNft(false);
                dispatch(fetchData(blockchain.account));
            });
    };

    const getData = () => {
        if (blockchain.account !== "" && blockchain.smartContract !== null) {
            dispatch(fetchData(blockchain.account));
        }
    };

    useEffect(() => {
        getData();
    }, [blockchain.account]);

    const plus_num = () => {
        // const {mintNum} = this.state;
        if (mintNum >= 25) return;
        setMintNum(mintNum + 1);
        // if (mintNum == 25) return;
    }
    const minus_num = () => {
        // const {mintNum} = this.state;
        if (mintNum <= 0) return;
        setMintNum(mintNum - 1)
    }
    return (
        <div className='mint-control' id='mint'>
            <Container>
                <Row>
                    <Col md={6} xs={12} className='mint-image'>
                        <img src={"https://cdn.discordapp.com/attachments/914634855709560862/920797475256799322/IMG_1411.gif"} alt='mint gif' />
                    </Col>
                    <Col md={6} xs={12} className='mint-description'>
                        <header>MINT YOUR <text style={{ color: "#E8B331" }}>DEAD BANDIT</text>
                        </header>
                        <p style={{ textAlign: "center" }}>

                        Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum 
                        Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum 
                        Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum 
                        Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum 
                        Lorem ipsum Lorem ipsum 
                            <br/><br/>
                            Lorem ipsum Lorem ipsum 
                            {/* <text style={{fontWeight: "bold"}}>
                                <a style={{textDecoration: "none", color: "white", fontWeight: 900, fontSize: 20}}href="https://instagram.com/dickpixnft"> Instagram </a>
                            </text> 
                            and 
                            <text style={{fontWeight: "bold"}}>
                                <a style={{textDecoration: "none", color: "white", fontWeight: 900, fontSize: 20}}href="https://twitter.com/thedickpixnft"> Twitter!</a>
                            </text> */}
                            </p>
                        <div className='number-control'>
                            <BsFileMinusFill color='white' size={40} onClick={() => minus_num()} />
                            <span id="inputBox">{mintNum}</span>
                            <BsFilePlusFill color='white' size={40} onClick={() => plus_num()} />
                        </div>
                        <p style={{marginTop: 0, marginBottom: 0}}>0.01 ETH + Gas</p>
                        {
                            blockchain.account === "" || blockchain.smartContract === null ?
                                <div className="flex-column">
                                    <button className='ybutton'
                                        onClick={(e) => {
                                            console.log("--------")
                                            // e.preventDefault();
                                            // dispatch(connect());
                                            // getData();
                                        }}>COMING SOON</button>
                                    {blockchain.errorMsg !== "" ? (
                                        <div style={{ textAlign: "center", fontSize: 20, color: "white" }}>
                                            {blockchain.errorMsg}
                                        </div>

                                    ) : null}
                                </div>
                                :
                                <button className='ybutton'
                                    onClick={(e) => {
                                        e.preventDefault();
                                        claimNFTs(1);
                                        getData();
                                    }}>{claimingNft ? "BUSY" : "MINT"}</button>
                        }
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Mint;