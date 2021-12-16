// import logo from './logo.svg';
import './App.css';
import React, { Suspense, useEffect } from "react";

//import components
import Header from './components/header/header';
import Team from './components/team/team';
import JoinCommunity from './components/join-community/join-community';
import Footer from './components/footer/footer';
import RoadMap from './components/roadmap/roadmap';
import TopItems from './components/top-items/top-items';
import Mint from './components/mint/mint';
import About from './components/about/about';
import Meet from './components/meet/meet';
import FounderThing from './components/founderthing/founderthing';
// import il from './assets/CenterPic.png';
import './assets/newStyle.css';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    };
  }

  componentDidMount(){
    this.timerID = setTimeout(
      () => this.clearBackGround(),
      4000
    );
  }

  clearBackGround = () => {
    this.setState({
      isLoading: false
    });
  }
  render(){
    return (
      this.state.isLoading?
      <div className='black-bg'>
      </div>:
      <div >
        <Header />
        <About />
        <Meet />
        
        <Mint />
        <RoadMap />
        <FounderThing />
        <JoinCommunity />
        <Footer />
      </div>
    );
  }
  
}

export default App;
