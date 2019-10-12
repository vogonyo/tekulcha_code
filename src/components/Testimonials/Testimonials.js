import React from 'react';
import './Testimonials.css';
import Testimonial1 from './images/testimonial1.jpeg';
import Testimonial2 from './images/testimonial2.jpeg';
import Testimonial3 from './images/testimonial3.jpeg';


const Testimonials = () => {
    return(
        <div className="col-md-12">
          <figure className="snip1192 text-muted">
            <blockquote>My relationship with Tekulcha has been nothing short of terrific. From reviewing my project with their team to choosing a highly-talented developer and all through releasing our app, it has been an incredibly smooth and successful experience. </blockquote>
            <div className="author">
                <img src={Testimonial1} alt="sq-sample1"/>
                <h5>Vincent Aloo <span>Director, EAG</span></h5>
            </div>
            </figure>
            <figure className="snip1192 text-muted">
            <blockquote>Hiring my first developer on Tekulcha was such a pleasant experience that I easily made the decision to make another hire.Every developer I have hired on Tekulcha has been exceptionally skilled and professional.None required supervision.</blockquote>
            <div className="author">
                <img src={Testimonial2} alt="sq-sample24"/>
                <h5>Patrice<span> CTO, Turnapp</span></h5>
            </div>
            </figure>
            <figure className="snip1192 text-muted">
            <blockquote>Tekulcha understood what our project needed immediately.We were matched with an exceptional freelancer from Nairobi who blendend seamlessly with our team, understood our vision and produced top-notch results.</blockquote>
            <div className="author">
                <img src={Testimonial3} alt="sq-sample29"/>
                <h5>Ombui Jackson<span> CEO, Multilab Systems</span></h5>
            </div>
            </figure>
     </div>
    );    
}
export default Testimonials;