import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Join from '../Join/Join';

import './TalentList.css';

export default class TalentList extends Component {
  render() {
    return (
      <div className="TalentList">
         <h1 className="heading-primary text-center pt-4">Talent!</h1>
        <div className="container py-5">
          <div className="text-center talent-content">
             Our network consists of elite engineers from big tech firms.
              Here are some of talented engineers we have in our network!
          </div>
          </div>
          
        <div className="container">
          <div className="row">
              {this.props.talent.map(t => (
                  <div className="col-lg-4 col-md-6 text-center Talent" key={t.name}>
                    <img src={t.src} alt={t.name}/>
                    <h3 className="mt-3">
                        <Link className="underline" to={`/talent/${t.name}`}>
                        {t.name}
                        </Link>
                    </h3>
                  </div>
              ))}
           </div>  
        </div>
        
            <hr></hr>
            <Join/>
           <Footer/>

      </div>
    )
  }
}
