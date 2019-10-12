import React from 'react';
import { Link } from 'react-router-dom';
import './Join.css';

const Join = () => {
    return(
        <div className="row py-5 community">
            <div className="col-md-2">

            </div>
            <div className="col-md-8">
              <div className="row text-center">
                <div className="col-sm-12 col-lg-5 col-md-5 py-2">
                   Join Tekulcha Community <ion-icon name="people" size="small"></ion-icon>
                </div>
                <div className="col-sm-12 col-lg-3 col-md-3 py-2">
                  <Link to="/apply"><div className="btn btn-lg">Apply as an Elite</div></Link>      
                </div>
                <div className="col-sm-12 col-lg-1 col-md-1 py-2">OR</div>
                <div className="col-sm-12 col-lg-3 col-md-3 py-2">
                <  Link to="/contact-us"><div className="btn btn-lg"> Hire Tekulcha</div></Link> 
                </div>
              </div>
            </div>
            <div className="col-md-2">
              
            </div>
        </div>
        
    );
}

export default Join;
