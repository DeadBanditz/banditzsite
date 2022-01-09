import React from "react";

//import CSS
import './beammember.css';

class beamMember extends React.Component {
    render() {
        return (
            <div className='beammember-control' style={{textAlign: "center", justifyContent: "center"}}>
                <img style={{maxHeight: 500, maxWidth: 500}}src={this.props.imageUrl} alt='beam member'/>
                <div className='beammember-description'>
                    <p className='beammember-name'>{this.props.name}</p>
                    <p className='beammember-occupation'>{this.props.title}</p>
                </div>
            </div>
        );
    }
}

export default beamMember;