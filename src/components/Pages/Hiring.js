import React from 'react';
import { Link } from 'react-router-dom';
import './PageStyles.css';
import Stage1 from '../static/images/stage1.svg';
import Stage2 from '../static/images/stage2.svg';
import Stage3 from '../static/images/stage3.svg';
import Stage4 from '../static/images/stage4.svg';
import Stage5 from '../static/images/stage5.svg';
import Stage6 from '../static/images/stage6.svg';
import Footer from '../Footer/Footer';

const Hiring = () => {
    return(
        <div>
        <div className="container">
            <div className="row py-3">
                <div className="hiring-header">
                    <span className="text-center firstLine">Are you an experienced</span> <span className="firstLine text-center">software engineer?</span> 
                    <div className="py-3">
                    <span className="text-center secondLine">We thoroughly screen software engineers to</span><span className="text-center secondLine"> be able to filter and remain with the truly Top 1 percent.</span>
                    </div>
                    <Link to="/apply">
                    <div className="container">
                        <div className="row">
                            <div className="col text-center">
                               <div className="btn btn-large rounded text-white font-weight-bold text-uppercase my-4 py-3 px-5">Apply as a developer</div>
                           </div>
                        </div>
                     </div>
                    </Link>
                </div>
            </div>
            <div className="row bgHiring">
                <div className="text-center firstLine hiring-header py-5">How to join our talent pool</div>
                <div className="row container">
                    <div className="col-md-6 col-lg-6 col-sm-12 py-2">
                        <div className="row">
                                <div className="col-md-3 col-lg-3 col-sm-3">
                                    <img className="rounded float-left img-fluid" src={Stage1} alt="stage1"></img>
                                </div>
                                <div className="col-md-9 col-lg-9 col-sm-9 container">
                                    <h5 className="font-weight-bolder"><span className="badge badge-warning badge-pill">1</span> Language and Communication skills</h5>
                                    <div className="hiring-text">Our first screening test for the candidates language and ability to communicate clearly.Candidates must be able to read ,write and speak English extremely well.</div>
                                </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-6 col-sm-12 py-2">
                        <div className="row">
                                <div className="col-md-3 col-lg-3 col-sm-3">
                                    <img className="rounded float-left img-fluid" src={Stage2} alt="stage2"></img>
                                </div>
                                <div className="col-md-9 col-lg-9 col-sm-9 container">
                                    <h5 className="font-weight-bolder"><span className="badge badge-warning badge-pill">2</span> Personality traits</h5>
                                    <div className="hiring-text">Next we dig into their personality traits while looking for self driven ,passionate individuals with an aptitude for programming that are also fully engaged with their work.</div>
                                </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-6 col-sm-12 py-2">
                       <div className="row">
                                <div className="col-md-3 col-lg-3 col-sm-3">
                                   <img className="rounded float-left img-fluid" src={Stage3} alt="stage3"></img>
                                </div>
                                <div className="col-md-9 col-lg-9 col-sm-9 container">
                                    <h5 className="font-weight-bolder"><span className="badge badge-warning badge-pill">3</span> Technical Ability Screening</h5>
                                    <div className="hiring-text">Next we access the candidates technical skills and problem solving ability and intellect through various tests.Only exceptional ones are accepted.</div>
                                </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-6 col-sm-12 py-2">
                        <div className="row">
                                <div className="col-md-3 col-lg-3 col-sm-3">
                                    <img className="rounded float-left img-fluid" src={Stage4} alt="stage4"></img>
                                </div>
                                <div className="col-md-9 col-lg-9 col-sm-9 container">
                                    <h5 className="font-weight-bolder"><span className="badge badge-warning badge-pill">4</span> Online and in-person screening</h5>
                                    <div className="hiring-text"> Each candidate is screened by experts in their functional domain.The interviewer will provide specific exercises that cover topics within the candidate's primary domain of expertise.
                                    We screen for problem solving ability ,depth of experience, communication ability and creativity.
                                    </div>
                                </div>
                        </div>
                   </div>
                    <div className="col-md-6 col-lg-6 col-sm-12 py-2">
                        <div className="row">
                                <div className="col-md-3 col-lg-3 col-sm-3">
                                <img className="rounded float-left img-fluid" src={Stage5}  alt="stage5"></img>
                                </div>
                                <div className="col-md-9 col-lg-9 col-sm-9 container">
                                    <h5 className="font-weight-bolder"><span className="badge badge-warning badge-pill">5</span> Test Projects</h5>
                                    <div className="hiring-text">Each candidate is then assigned a test project to evaluate whether trully the top 1%.Test projects enables us evaluate how they would perform in a real world scenario.Candidates are able to showcase their professionalism, competence , thoroughness and integrity over a period of 1 week to a month.</div>
                                </div>
                            
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-6 col-sm-12 py-2">
                        <div className="row">
                                <div className="col-md-3 col-lg-3 col-sm-3">
                                    <img className="rounded float-left img-fluid" src={Stage6}  alt="stage6"></img>
                                </div>
                                <div className="col-md-9 col-lg-9 col-sm-9 container">
                                        <h5 className="font-weight-bolder"><span className="badge badge-warning badge-pill">6</span> Sustained excellence</h5>
                                        <div className="hiring-text">Tekulcha talent are expected to maintain a perfect track record while working with clients.We have zero tolerance to substandard work or poor communication for any reason.</div>
                                </div>
                        </div>
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


export default Hiring;