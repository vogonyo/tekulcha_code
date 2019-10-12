import React from 'react';
import Footer from '../Footer/Footer';
import './PageStyles.css'
const Company = () => {
    return(
        <div className="page">
            <div className="container">
                <div className="row py-5">
                    <div className="col-md-1 col-lg-1"></div>
                    <div className="col-md-8 col-lg-8 font-weight-mormal">
                     <h1 className="text-center text-capitalize font-weight-bold text-muted text-monospace">Our Vision</h1>
                      <div className="content pb-5 pt-3 text-monospace">We have an ambitious plan of connecting tech Companies, Startups, Companies, Businesses and even Governments with the <span className="font-weight-bold">Top 1% </span> talent from Africa and the world.
                      We are positioning ourselves at the bleeding edge of accelerating growth in technology startups in Silicon savannah and Africa at large.We are obsessed about the quality of products our network of Engineers produce as we believe our output will have major effects on the underlying technologies that 
                      will be used by fellow Africans, going forward.Our vision stems from the belief that Africa as a startup continent is still young and needs visionary engineers to spearhead the tech revolution.
                      </div> 
                     
                      <h2 className="text-center text-capitalize font-weight-bold text-muted text-monospace">The problem & solution</h2>
                      <div className="content py-5 text-monospace">
                        Most companies do not have access to quality talent and cost of interviewing prospective engineers is high and often does not result in the right hires.Thats where we come in.Our company ensures your 
                        business gets the right engineers for the specific project and you only pay after you are satisfied with the results.Our talent is largely remote.
                        </div>
                    </div>                   
                </div>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    );
}


export default Company;