import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import { goToTop } from 'react-scrollable-anchor';
const linkStyle = {
    textDecoration: 'none'
}

const Footer = (props) => {
    return(
        <div className="footerbg container-fluid">
          <div className="container my-2">
            <div className="row py-5">
                <div className="col-lg-3 col-md-6 footer-links ">
                    <ul className="list-group">
                       <span className="pl-3 text-bold header-secondary">Most In Demand Talent</span>
                        <li className="list-group-item">Front End Developers</li>
                        <li className="list-group-item">iOS Developers</li>
                        <li className="list-group-item">UX Designers</li>
                        <li className="list-group-item">UI Designers</li>
                        <li className="list-group-item">Backend End Developers</li>
                        <li className="list-group-item">Android Developers</li>
                       
                    </ul>
                </div>
                <div className="col-lg-3 col-md-6 ">
                   <ul className="list-group ">
                       <span className="pl-3 header-secondary">Who we are</span>
                        {/* <li className="list-group-item">The Top 1% <ion-icon name="paw" size="small"></ion-icon></li> */}
                        <Link to="/hiring-process" style={linkStyle}><li className="list-group-item">Our Hiring Process</li></Link>
                        {/* <Link to="/developer-stories" style={linkStyle}><li className="list-group-item">Developer Stories</li></Link>
                        <Link to="/client-stories" style={linkStyle}><li className="list-group-item">Client Stories</li></Link> */}
                        {/* <Link to="/how-it-works" style={linkStyle}><li className="list-group-item">How it Works</li></Link> */}
                        <Link to="/apply" style={linkStyle}><li className="list-group-item">Apply to be an Elite</li></Link>
                        <Link to="/company" style={linkStyle}><li className="list-group-item">Company</li></Link>                        
                    </ul>
                </div>
                <div className="col-lg-3 col-md-6">
                  <ul className="list-group">
                       <span className="pl-3 header-secondary">About </span>
                        <Link to="/contact-us" style={linkStyle}><li className="list-group-item">Contact Us</li></Link>
                        <Link to="/faq" style={linkStyle}><li className="list-group-item">FAQ</li></Link>
                        <Link to="/talent" style={linkStyle}><li className="list-group-item">Talent Network</li></Link>
                        <Link to="/solutions" style={linkStyle}><li className="list-group-item">Solutions</li></Link>
                        {/* <Link to="/marketplace" style={linkStyle}><li className="list-group-item">MarketPlace</li></Link> */}
                   </ul>
                </div>
                <div className="col-lg-3 col-md-6">
                
                 <span className="pl-3 header-secondary"> <ion-icon name="analytics"></ion-icon> Our value</span>
                    <div className="footer-text">
                        <p className="py-2">
                          Tekulcha is an invitation-only network of top-notch talent in software engineering, design and project management in the world.We have our<span className="footer-hightlighted"> roots in Africa.</span>
                          Our company adds value to <span className="footer-hightlighted">Companies</span>, <span className="footer-hightlighted">Startups </span>and <span className="footer-hightlighted">Governments</span> by connecting them to high quality talent on demand.
                       </p>
                    </div>
                    <span className="pl-3 header-secondary">Social </span>
                    <div className="footer-social">
                        
                    <a href="https://www.linkedin.com/company/tekulcha/"> <span className="py-2 footer-social__link"><ion-icon name="logo-linkedin" size="large"></ion-icon></span></a>
                    <a href='https://twitter.com/tekulcha'><span className="py-2 footer-social__link"><ion-icon name="logo-twitter" size="large"></ion-icon></span></a>
                    <a href='https://instagram.com/tekulcha'><span className="py-2 footer-social__link"><ion-icon name="logo-instagram" size="large"></ion-icon></span></a>
                    <a href="https://www.facebook.com/Tekulcha-306309986980692/"> <span className="py-2 footer-social__link"><ion-icon name="logo-facebook" size="large"></ion-icon></span></a>
                    </div>
                  <div className="scroller__top py-5">
                        <a href="#top" style={linkStyle} onClick={goToTop}><ion-icon name="arrow-dropup-circle" size="large"></ion-icon>Back To Top</a>
                    </div>
                </div>
            </div>
        </div>
        <div className="row bg-dark py-5">
                <div className="col-lg-3 col-md-6">
                   <p className="text-muted footer-copy py-2">
                      Tekulcha  | Great Work by the smartest people
                    </p>
                </div>
                <div className="col-lg-3 col-md-4 py-3">
                </div>
                <div className="col-lg-3 col-md-6">
                    <div className="text-muted text-right footer-copy py-2">
                        &copy; Tekulcha Limited {(new Date().getFullYear())}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
