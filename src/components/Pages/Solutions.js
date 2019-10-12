import React from 'react';
import Footer from '../Footer/Footer';
import { Link } from 'react-router-dom';
import Development from '../static/images/development.gif';
import Design from '../static/images/design.png';
import Prototyping from '../static/images/prototyping.jpeg';
import Maintainance from '../static/images/maintainance.jpg';
import Innovation from '../static/images/innovation.png';
import ScrollableAnchor from 'react-scrollable-anchor';
import SolutionsHeader from '../Header/SolutionHeader';
import './PageStyles.css';

const Solutions = () => {
    return(
       <div className="page">
          <div className="solutions">
            <div className="container-fluid">
                <div className="row">
                       <SolutionsHeader/>
                </div>
            </div>
            <br></br>
            <div className="container">
                <div className="row">
                    <ScrollableAnchor id={'development'}>
                    <div className="row py-5">
                    <div className="col-md-7 col-lg-7 col-sm-12">
                        <h3 className="py-2 underline">Development Solution</h3>
                          <div className="py-3 text-monospace">
                          <div ><span className="checks"><ion-icon name="checkmark-circle-outline"></ion-icon></span><span className="font-weight-bold checks-txt"> Variety of quality talent</span></div>
                           We solve your development needs by allowing you to choose from a variety of top-notch talent to build your software.
                           </div>
                           <div className="py-3 text-monospace">
                          <div ><span className="checks"><ion-icon name="checkmark-circle-outline"></ion-icon></span><span className="font-weight-bold checks-txt"> High Quality Software</span></div>
                           We create high quality software on demand.This is largely because our freelancers are the Top 1%.
                           </div>
                           <div className="py-3 text-monospace">
                          <div ><span className="checks"><ion-icon name="rocket"></ion-icon></span><span className="font-weight-bold checks-txt"> Rapid development</span></div>
                           We are able to prototype quickly but still maintaining high quality software standards.
                           </div>
                           <div className="py-3 text-monospace">
                           <div><span className="checks"><ion-icon name="checkmark-circle-outline"></ion-icon></span><span className="font-weight-bold checks-txt"> Project management</span></div>
                            We handle project management so you dont have to while communicating clearly on the progress every step of the way.
                            </div>
                    </div>
                    <div className="col-md-5 col-lg-5">
                        <img src={Development} alt="Our development process" width="100%" height="90%"></img>
                    </div>
                </div>
                </ScrollableAnchor>
                <ScrollableAnchor id={'design'}>
                <div id="design" className="row py-5">
                <div className="col-md-5 col-lg-5">
                        <img src={Design} className="rounded" alt="Our design process" width="100%" height="100%"></img>
                    </div>
                    <div className="col-md-7 col-lg-7 col-sm-12">
                        <div className="heading-tertiary py-2">Design Solution</div>
                          <div className="py-3 text-monospace">
                          <div ><span className="checks"><ion-icon name="checkmark-circle-outline"></ion-icon></span><span className="font-weight-bold checks-txt"> Our designs have users in mind</span></div>
                           We create products, systems and services that provide meaningful and relevant experiences to users.
                           </div>
                           <div className="py-3 text-monospace">
                          <div ><span className="checks"><ion-icon name="checkmark-circle-outline"></ion-icon></span><span className="font-weight-bold checks-txt"> Our process in a nutshell</span></div>
                           User Research <ion-icon name="arrow-round-forward"></ion-icon> UX wireframing <ion-icon name="arrow-round-forward"></ion-icon> UX prototyping <ion-icon name="arrow-round-forward"></ion-icon> UI Design <ion-icon name="arrow-round-forward"></ion-icon> User Testing
                           </div>
                           <div className="py-3 text-monospace">
                          <div ><span className="checks"><ion-icon name="checkmark-circle-outline"></ion-icon></span><span className="font-weight-bold checks-txt"> Why use our design process?</span></div>
                           Our design process makes your idea come to life through an iterative process of wireframes and mockups.
                           </div>
                           <div className="py-3 text-monospace">
                           <div><span className="checks"><ion-icon name="checkmark-circle-outline"></ion-icon></span><span className="font-weight-bold checks-txt"> Quickly iterate to high fidelity designs</span></div>
                            Short iteration cycles lead to high fidelity designs in a few weeks.
                            </div>
                    </div>
                </div>
                </ScrollableAnchor>
                <ScrollableAnchor id={'innovation'}>
                <div className="row py-5">
                    <div className="col-md-7 col-lg-7 col-sm-12">
                        <div className="heading-tertiary py-2 underline">Innovation Solution</div>
                          <div className="py-3 text-monospace">
                          <div ><span className="checks"><ion-icon name="checkmark-circle-outline"></ion-icon></span><span className="font-weight-bold checks-txt"> Access to top talent in new domains</span></div>
                           Our innovation solution allows you to access top talent in new and emerging technologies such as NodeJs, Flask, Machine Learning.
                           </div>
                           <div className="py-3 text-monospace">
                          <div ><span className="checks"><ion-icon name="checkmark-circle-outline"></ion-icon></span><span className="font-weight-bold checks-txt"> Cutting edge research</span></div>
                           Research cutting edge technologies that can transform your business
                           </div>
                           <div className="py-3 text-monospace">
                          <div ><span className="checks"><ion-icon name="flash"></ion-icon></span><span className="font-weight-bold checks-txt text-muted"> Patner with Tekulcha</span></div>
                           Patner with a company with deep software development expertise.
                           </div>
                           <div className="py-3 text-monospace">
                          <div ><span className="checks"><ion-icon name="checkmark-circle-outline"></ion-icon></span><span className="font-weight-bold checks-txt"> Open to new thinking</span></div>
                           We are open to working in new and unexplored domains.We believe we can assemble a team that is a great fit no matter how complex your project requirements may be.
                           </div>
                    </div>
                    <div className="col-md-5 col-lg-5">
                        <img className="rounded" src={Innovation} alt="Our innovation process" width="100%" height="90%"></img>
                    </div>
                </div>
                </ScrollableAnchor>
                <ScrollableAnchor id={'maintainance'}>
                <div className="row">
                <div className="col-md-5 col-lg-5">
                        <img src={Maintainance} className="rounded" alt="Our maintance process" width="100%" height="90%"></img>
                    </div>
                    <div className="col-md-7 col-lg-7 col-sm-12">
                        <h3 className="py-2">Maintainance Solution</h3>
                          <div className="py-3 text-monospace">
                          <div ><span className="checks"><ion-icon name="checkmark-circle-outline"></ion-icon></span><span className="font-weight-bold checks-txt"> Stress free engineering support</span></div>
                           We offer engineering support such as regular upgrades when needed.
                           </div>
                           <div className="py-3 text-monospace">
                          <div ><span className="checks"><ion-icon name="checkmark-circle-outline"></ion-icon></span><span className="font-weight-bold checks-txt"> Quality Assurance</span></div>
                            We test your application thouroughly and regularly.                      
                           </div>
                           <div className="py-3 text-monospace">
                          <div ><span className="checks"><ion-icon name="checkmark-circle-outline"></ion-icon></span><span className="font-weight-bold checks-txt"> Bug bounty</span></div>
                           We are quick to solve issues brought about by bugs.
                           </div>
                    </div>
                </div>
                </ScrollableAnchor>
                
                <ScrollableAnchor id={'prototyping'}>
                <div className="row py-5">
                    <div className="col-md-7 col-lg-7 col-sm-12">
                        <h3 className="py-2">Prototyping Solution</h3>
                           <div className="py-3 text-monospace">
                          <div ><span className="checks"><ion-icon name="checkmark-circle-outline"></ion-icon></span><span className="font-weight-bold checks-txt"> Quickly ship products</span></div>
                           Our elite freelancers are able to transform code to meaningful products quickly.
                           </div>
                           <div className="py-3 text-monospace">
                          <div ><span className="checks"><ion-icon name="flash"></ion-icon></span><span className="font-weight-bold checks-txt text-muted"> MVP Design</span></div>
                           We are able to make a minimum viable solution(MVP) for your product to allow your business assess market requirements earlier on.
                           </div>
                           <div className="py-3 text-monospace">
                          <div ><span className="checks"><ion-icon name="checkmark-circle-outline"></ion-icon></span><span className="font-weight-bold checks-txt"> Quality Products</span></div>
                           We make quality market ready products that can get you up and running in no time
                           </div>
                    </div>
                    <div className="col-md-5 col-lg-5">
                        <img className="rounded" src={Prototyping} alt="Our innovation process" width="100%" height="100%"></img>
                    </div>
                </div>
                </ScrollableAnchor>
                <ScrollableAnchor id={'teams'}>
                <div className="row py-5">
                    <div className="col-md-8 col-lg-8 col-sm-12">
                        <h4 className="py-2 text-center font-weight-bolder">Bridge your technical talent gap with Tekulcha</h4>
                          <div className="py-3 text-monospace">
                          <div ><span className="checks"><ion-icon name="checkmark-circle-outline"></ion-icon></span><span className="font-weight-bold checks-txt"> Our remote engineers are world class</span></div>
                           Tekulcha engineers cover every tech-stack ,delivering complex projects under tight deadlines in a variety of industries.Our developers are great problem solvers and trustworthy.
                           </div>
                           <div className="py-3 text-monospace">
                          <div ><span className="checks"><ion-icon name="checkmark-circle-outline"></ion-icon></span><span className="font-weight-bold checks-txt"> Build a remote team with relevant skills</span></div>
                            Build a worldclass distributed development team with relevant skills for your ongoing or next project.
                           </div>
                           {/* <div>
                           <div className="btn btn-large mx-2"></div><div className="btn btn-large mx-2"></div> <div className="btn btn-large mx-2"></div></div> */}
                           <div className="py-3 text-monospace">
                          <div ><span className="checks"><ion-icon name="checkmark-circle-outline"></ion-icon></span><span className="font-weight-bold checks-txt"> Our talent have worked for big companies</span></div>
                            Work with the top developers and designers who have worked for big names like Safaricom, IBM, Andela, Cellulant, Paystack, Microsoft, Google among others.
                           </div>
                           <div className="container"> 
                             <Link to="/contact-us"><div className="btn btn-large px-3 py-2 checks-txt">Get started</div></Link>
                           </div>
                    </div>
                </div>
                </ScrollableAnchor>

            </div>
           </div>
            <div>
          </div>
            <Footer/>
         </div>
    </div>
    );
}

export default Solutions;