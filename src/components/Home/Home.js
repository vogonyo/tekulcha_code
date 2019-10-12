import React from 'react';
// import CardList from '../CardUI/CardList';
import { Jumbotron } from 'reactstrap';
import './home.css';
// import Accordion from '../Faq/Accordion';
import {Link } from 'react-router-dom';
import Testimonials from '../Testimonials/Testimonials';
import Footer from '../Footer/Footer';
import Join from '../Join/Join';
import SliderImg from '../static/images/sliderimg.png';
import World from '../static/images/world.svg';
import Remote1 from '../static/images/remote1.png';
import Remote2 from '../static/images/remote2.png';
import Remote3 from '../static/images/remote3.png';
import Remote4 from '../static/images/remote4.png';

const Home = () => {
  return(
    <div>
      <div  className="jumbotron">
      <Jumbotron>
        <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-6">
              <div className="container">
              <div className="row text-white display-3 font-weight-bold "><span className="jumbo-text">We Build</span></div>
              <div className="row text-white display-3 font-weight-bold text-muted"><span className="jumbo-text">Software </span></div>
              <div className="row text-white display-6 font-weight-bold"><span className="jumbo-text"> Companies</span></div>
              {/* <div className="row text-white py-5 d-none d-md-block display-6"> <p className="lead jumbo-text">Our company hires the <span className="text-muted font-weight-bolder">Top 1% </span>of talent in software engineering.Our pool of top talent could build your next project or join your team on demand.</p></div> */}
              <div className="row">
                 <Link to="/contact-us"><div className="btn btn-large text-center px-4 py-3 mt-4">Contact Us</div></Link>
              </div>            
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6 ">
              <div className="row pb-5 bgslider d-none d-md-block"><img src={SliderImg} alt="Bg" width="100%"></img></div>
          </div>
       </div>
      </div>
      </Jumbotron>
      </div>
      <div className="container-fluid card text-white world">
      <h6 className="card-text text-dark text-center card-text text-muted pt-5 world-text blockquote display-4">Tekulcha connects businesses to the Top 1% Elite Freelancers in Africa and the World</h6>
        <img className="" src={World} alt="Collected pool of talent worldwide"></img>
     </div>
      <div className="container pb-5">
          <h2 className="heading-primary text-center pt-5">Our Core Values</h2>
        <div className="row py-5">
          <div className="col-sm-6 col-md-3 col-lg-3 core">
               <div className="text-center py-3 icon-striped"><ion-icon name="checkmark-circle" size="large"></ion-icon></div>
               <h5 className="font-weight-bolder text-center">Management</h5>
               <div className="py-4 text-center font-weight-normal text-muted core-text">Work with a managed software development service and only wait for results.</div>
          </div>
          <div className="col-sm-6 col-md-3 col-lg-3 core">
               <div className="text-center py-3 icon-colored"><ion-icon name="rocket" size="large"></ion-icon></div>
               <h5 className="font-weight-bold text-center">Quick</h5>
               <div className="py-4 text-center font-weight-normal text-muted core-text">Come up with a development team suitable for a project fast.</div>
          </div>
          <div className="col-sm-6 col-md-3 col-lg-3 core">
                <div className="text-center py-3 icon-striped"><ion-icon name="stats" size="large"></ion-icon></div>
               <h5 className="font-weight-bold text-center">Reliability</h5>
               <div className="py-4 text-center font-weight-normal text-muted core-text">Working with proven top talent enables us to deliver consistently quality work on time.</div>
          </div>
          <div className="col-sm-6 col-md-3 col-lg-3 core">
               <div className="text-center py-3 icon-colored"><ion-icon name="medal" size="large"></ion-icon></div>
               <h5 className="font-weight-bold text-center ">Expert</h5>
               <div className="py-4 text-center font-weight-normal text-muted core-text">Get the chance to work with the smartest experts in the Industry(Top 1%)</div>
          </div>
        </div>
      </div>
      {/* <div className="container">
        <CardList/>
      </div> */}
        <div className="container">
            <div className="text-center py-5">
                <h2 className="heading-primary">What clients say</h2>
              </div>
          <Testimonials/>
          <div className="row py-5">
            <div className="col text-center">
            {/* <div className="btn py-3 text-wrap"><ion-icon name="arrow-round-forward"></ion-icon> More Client Stories </div> */}
            </div>
            </div>
        </div>
        <div className="container">
           <div className="text-center">
                <h2 className="text-muted font-weight-bolder text-center py-5 heading-primary" >How we work!</h2>
              </div>
          <div className="row core">
            <div className="col-md-3 col-lg-3 col-sm-12 my-2">
              <div className="card">
                 <img className="rounded card-img-top" src={Remote1} alt="Remote workers"  width="100%"></img>
                 <div className="card-body">
                  <p className="card-text">
                  <span className="badge badge-success">1</span> Tell us what kind of project you are working on / freelance talent you need.
                  </p>
                 </div>
              </div>
            </div>
            <div className="col-md-3 col-lg-3 col-sm-12 my-2">
              <div className="card">
                <img className="rounded card-img-top" src={Remote2} alt="Remote workers"  width="100%"></img>
                <div className="card-body">
                  <p className="card-text">
                    <span className="badge badge-success">2</span> We get the right fit of talent for your specific needs.
                  </p>
                 </div>
              </div>
            </div>
            <div className="col-md-3 col-lg-3 col-sm-12 my-2">
              <div className="card">
                <img className="rounded card-img-top" src={Remote3} alt="Remote workers"  width="100%"></img>                 
                 <div className="card-body">
                  <p className="card-text">
                     <span className="badge badge-success">3</span> Work with them at zero risk and zero management, only communication.
                  </p>
                 </div>
              </div>
            </div>

            <div className="col-md-3 col-lg-3 col-sm-12 my-2">
             <div className="card">
                <img className="rounded card-img-top" src={Remote4} alt="Remote workers" width="100%"></img>
                 <div className="card-body">
                  <p className="card-text">
                     <span className="badge badge-success">4</span> They become part of your team until the project is done.
                  </p>
                 </div>
              </div>
            </div>
          </div>
        </div>
        <hr></hr>
        <div className="container">
          <div className="row py-5 text-muted">
            <div className="container font-weight-bolder text-center py-5 heading-tertiary">Choose from our pool of talented Engineers</div>
            <div className="col-sm-6 col-md-3 col-lg-3">
               <ul className="list-group ">
                 <li className="list-group-item developer">AWS Developers</li>
                 <li className="list-group-item">Android Developers</li>
                 <li className="list-group-item">AngularJs Developers</li>
                 <li className="list-group-item">Backend Developers</li>
                 <li className="list-group-item">Blockchain Developers</li>
                 <li className="list-group-item">C++/C Developers</li>
                 <li className="list-group-item">CSS3 Developers</li>
                 <li className="list-group-item">Data Analysts</li>
                 <li className="list-group-item">Data Scientists</li>
                 <li className="list-group-item">DevOps Engineers</li>
               </ul>
            </div>
            <div className="col-sm-6 col-md-3 col-lg-3">
            <ul className="list-group developer">
                 <li className="list-group-item">Django Developers</li>
                 <li className="list-group-item">EmberJS Developers</li>
                 <li className="list-group-item">Frontend Developers</li>
                 <li className="list-group-item">Flask Developers</li>
                 <li className="list-group-item">Flutter Developers</li>
                 <li className="list-group-item">Golang Developers</li>
                 <li className="list-group-item">HTML5 Developers</li>
                 <li className="list-group-item">iOS Developers</li>
                 <li className="list-group-item">Java Developers</li>
                 <li className="list-group-item">Javascript Developers</li>
               </ul>
            </div>
            <div className="col-sm-6 col-md-3 col-lg-3">
            <ul className="list-group developer">
                 <li className="list-group-item">ML Engineers</li>
                 <li className="list-group-item">Magento Developers</li>
                 <li className="list-group-item">Mobile App Developers</li>
                 <li className="list-group-item">.NET Developers</li>
                 <li className="list-group-item">NodeJS Developers</li>
                 <li className="list-group-item">PHP Developers</li>
                 <li className="list-group-item">Python Developers</li>
                 <li className="list-group-item">ReactJS Developers</li>
                 <li className="list-group-item">Ruby Developers</li>
                 <li className="list-group-item">Ruby on Rails </li>
               </ul>
            </div>
            <div className="col-sm-6 col-md-3 col-lg-3">
            <ul className="list-group developer">
                 <li className="list-group-item">Scala Developers</li>
                 <li className="list-group-item">Software Architects</li>
                 <li className="list-group-item">Software Developers</li>
                 <li className="list-group-item">Unity Developers</li>
                 <li className="list-group-item">USSD Developers</li>
                 <li className="list-group-item">VR Developers</li>
                 <li className="list-group-item">VueJS Developers</li>
                 <li className="list-group-item">Web Developers</li>
                 <li className="list-group-item">Wordpress Developers</li>
               </ul>
            </div>
          </div>
        </div>
        <hr></hr>
        <div className="container">
          <div className="row">
            <div className="container font-weight-bolder text-center py-5 text-muted heading-tertiary">Choose from our pool of talented Designers</div>
            <div className="col-sm-6 col-md-3 col-lg-3">
              <ul className="list-group">
                <li className="list-group-item"> Creative Directors</li>
                <li className="list-group-item"> Freelance Designers</li>
                <li className="list-group-item"> Graphic Designers</li>
              </ul>
            </div>
          <div className="col-sm-6 col-md-3 col-lg-3">
              <ul className="list-group">
                <li className="list-group-item"> Illustrators</li>
                <li className="list-group-item"> Logo Designers</li>
                <li className="list-group-item"> Mobile App Designers</li>
              </ul>
            </div>
          <div className="col-sm-6 col-md-3 col-lg-3">
              <ul className="list-group">
                <li className="list-group-item"> Product Designers</li>
                <li className="list-group-item"> UI Designers</li>
                <li className="list-group-item"> UI/UX Designers</li>
              </ul>
            </div>
          <div className="col-sm-6 col-md-3 col-lg-3">
              <ul className="list-group">
                <li className="list-group-item"> UX Designers</li>
                <li className="list-group-item"> Visual Designers</li>
                <li className="list-group-item"> Web Designers</li>
              </ul>
            </div>
          </div>
        </div>
        <hr></hr>
        <div>
          <Join/>
        </div>
        <div>
          <Footer/>
        </div>
    </div>
  
  );
};

export default Home;