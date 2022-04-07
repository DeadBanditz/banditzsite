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
    const [mintNumTwo, setMintNumTwo] = useState(0)
    const [mintNumThree, setMintNumThree] = useState(0)
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

    const plus_numTwo = () => {
        // const {mintNum} = this.state;
        if (mintNumTwo >= 25) return;
        setMintNumTwo(mintNumTwo + 1);
        // if (mintNum == 25) return;
    }
    const minus_numTwo = () => {
        // const {mintNum} = this.state;
        if (mintNumTwo <= 0) return;
        setMintNumTwo(mintNumTwo - 1)
    }

    const plus_numThree = () => {
        // const {mintNum} = this.state;
        if (mintNumThree >= 25) return;
        setMintNumThree(mintNumThree + 1);
        // if (mintNum == 25) return;
    }
    const minus_numThree = () => {
        // const {mintNum} = this.state;
        if (mintNumThree <= 0) return;
        setMintNumThree(mintNumThree - 1)
    }
    
    return (
        <div className='mint-control' id='mint'>
            <Container style={{ textAlign: "center"}}>
                {/* USE THIS ONCE MINTING IS LIVE <img className="mintimage" src={"https://cdn.discordapp.com/attachments/197452746293641216/920889809860448276/DeadBanditz_MintNow-01.png"} alt='mint gif' /> */}
                <img className="mintimage" src={"https://github.com/DeadBanditz/banditzsite/blob/main/src/assets/DB_MintBanner-01.png?raw=true"} alt='mint gif' />
                <br/>
                <br/>
                <text style={{ color: "white", fontSize: 30 }} className="asdf">When each stage becomes available, mint your Dead Banditz here.</text>
                <div className='threeButtons' style={{alignItems: "center", alignContent: "center", justifyContent: "center",}}>
                <Row style={{ textAlign: "center", paddingLeft: 20, paddingRight: 20}}>
                    <text className='mint-description'>
                        {/* <header><text style={{ color: "#E8B331" }}><br/></text>
                    </header> */}
                        <p style={{ textAlign: "center" }}>
                            <text style={{ color: "#E8B331", fontSize: 25 }} className="asdf">Stage 1</text>
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
                        <p style={{ marginTop: 0, marginBottom: 0 }}>0.075 ETH + Gas</p>
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
                        <text className='mint-description'></text>
                    </text>
                </Row>
                <Row style={{ textAlign: "center", paddingLeft: 20, paddingRight: 20 }}>
                    <text className='mint-description'>
                        {/* <header><text style={{ color: "#E8B331" }}><br/></text>
                    </header> */}
                        <p style={{ textAlign: "center" }}>

                        <text style={{ color: "#E8B331", fontSize: 25 }} className="asdf">Stage 2</text>
                            {/* <text style={{fontWeight: "bold"}}>
                                <a style={{textDecoration: "none", color: "white", fontWeight: 900, fontSize: 20}}href="https://instagram.com/dickpixnft"> Instagram </a>
                            </text> 
                            and 
                            <text style={{fontWeight: "bold"}}>
                                <a style={{textDecoration: "none", color: "white", fontWeight: 900, fontSize: 20}}href="https://twitter.com/thedickpixnft"> Twitter!</a>
                            </text> */}
                        </p>
                        <div className='number-control'>
                            <BsFileMinusFill color='white' size={40} onClick={() => minus_numTwo()} />
                            <span id="inputBox">{mintNumTwo}</span>
                            <BsFilePlusFill color='white' size={40} onClick={() => plus_numTwo()} />
                        </div>
                        <p style={{ marginTop: 0, marginBottom: 0 }}>0.085 ETH + Gas</p>
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
                        <text className='mint-description'></text>
                    </text>
                </Row>
                <Row style={{ textAlign: "center", paddingLeft: 20, paddingRight: 20 }}>
                    <text className='mint-description'>
                    {/* <header><text style={{ color: "#E8B331" }}><br/></text>
                    </header> */}
                    <p style={{ textAlign: "center" }}>

                    <text style={{ color: "#E8B331", fontSize: 25 }} className="asdf">Stage 3</text>
                        {/* <text style={{fontWeight: "bold"}}>
                                <a style={{textDecoration: "none", color: "white", fontWeight: 900, fontSize: 20}}href="https://instagram.com/dickpixnft"> Instagram </a>
                            </text> 
                            and 
                            <text style={{fontWeight: "bold"}}>
                                <a style={{textDecoration: "none", color: "white", fontWeight: 900, fontSize: 20}}href="https://twitter.com/thedickpixnft"> Twitter!</a>
                            </text> */}
                    </p>
                    <div className='number-control'>
                        <BsFileMinusFill color='white' size={40} onClick={() => minus_numThree()} />
                        <span id="inputBox">{mintNumThree}</span>
                        <BsFilePlusFill color='white' size={40} onClick={() => plus_numThree()} />
                    </div>
                    <p style={{ marginTop: 0, marginBottom: 0 }}>0.095 ETH + Gas</p>
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
                    <text className='mint-description'></text>
                    </text>
                </Row>
                </div>
            </Container>
        </div>
    );
}

export default Mint;