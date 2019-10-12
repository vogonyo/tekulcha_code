import React, { Component } from 'react'
import CardUI from './CardUI';
import Talent from '../static/images/talentdev.jpg';
import Distributed from '../static/images/teams.png'
import Solutions from '../static/images/solutions.jpg';

class CardList extends Component{
    render(){
        return(
            <div className="container-fluid d-flex justify-content-center">
                <div className="row">
                    <div className="col-md-4">
                        <CardUI src={Distributed} title="Distributed Team" 
                                button="Remote" link="talent"
                                description="Our virtual teams consist of software developers,designers ,creatives with top-notch industry knowledge"
                                />
                    </div>
                    <div className="col-md-4">
                        <CardUI src={Talent} title="Talent Network" 
                                button="Talent" link="talent"
                                description="Only 1% of applicants are accepted to our network and everyone in our network has elite industry experience"
                                />
                    </div>
                    <div className="col-md-4">
                        <CardUI src={Solutions} title="Solutions Delivery" 
                                button="Solutions" link="solutions"
                                description="Tekulcha creates value for enterprise companies by delivering high-quality custom software on demand"
                                />
                    </div>
                    
                </div>
            </div>
        );
    }
}

export default CardList;