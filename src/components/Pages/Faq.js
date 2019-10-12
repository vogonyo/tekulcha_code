import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Accordion from '../Accordion/Accordion';

const Faq = () => {
    return(
      <div>
        <div className="container py-5">
          <div className="heading-secondary text-center py-4 ">Frequently asked Questions!</div>
            <Accordion
              title="How do I get started with Tekulcha?"
              content="If you have a funded digital initiative by a corporate sponsor, talk to our engineers, begin a conversation.Our initial offering includes a plan for your full application, building a Minimum Viable Product and maintainance until the next release."
            />
            <Accordion
              title="Once the contract is signed how fast will my project start?"
              content="First we schedule a planning meetup in which we define success parameters of the project.This takes a few days.Tekulcha will work with your team to produce a plan outlining the project specification, solution architecture and initial plan for the Minimum Viable Product."
            />
            <Accordion
              title="How is the best team assembled for my project?"
              content="Tekulcha has the necessary information to assemble the very best team for every individual component in the project, thus we are able to give you a team with the right skills and experience to build your Minimum Viable Product as well as add key functionality as per the project specifications.During the project your Happiness Manager removes or adds team members as your needs change thus ensuring your project has the right blend of talent."
            />
            <Accordion
              title="How much time does it take to build a project?"
              content="Our methodology of development is iterative which focuses on quickly building out a Minimum viable product with core functionality to enable user testing and prioritization of other features in many successive releases.Your Tekulcha team will produce the project specifications in 3 week sprints that is able to be tested by users or other internal requirements in order to validate requirements.The MVP is typically completed in 6 - 12 Weeks. "
            />
            <Accordion
              title="What is the minimum project size Tekulcha will work on?"
              content="Tekulcha's focus is on  'Great Applications' or mostly applications with the greatest impact for our clients.While most of our projects are multi-million engagements, most started smaller with initial Minimum Products in the KES 2M range."
            />
            <Accordion
              title="How do you ensure the best quality delivery?"
              content="Our solution delivery blends talent, technology and processes to make impact for our clients. We use a repeatable outcome-focused and measurable methodology  to ensure we deliver software applications with high business impact."
            />
            <Accordion
              title="What is a typical tekulcha team composed of?"
              content="Tekulcha staffs a delivery team with 4 or more roles, including  Happiness Manager, Designer , Solution Architect and Software Engineer(s)"
            />
            <Accordion
              title="How do we know we will be working with the best talent?"
              content="We go to great lengths to find and recruit the best product and project managers, designers and software engineers , who can deliver high quality complex enterprise applications.Tekulcha was started by Software professionals to connct tallented developers to interesting work to create high impact in businesses.Our Talent Network mainly comprises of Senior Engineers with wealth of experience in Tech companies."
            />
            <Accordion
              title="Will we be working directly with the development team?"
              content="Tekulcha provides a fully managed application development service so clients work with their Happiness Manager who also doubles up as a project manager ,who is accountable to ensure Tekulcha meets business objectives ensures your Tekulcha team is focused.However clients may communicate with anyone in their delivery team if they need to."
            />
            <Accordion
              title="How does Tekulcha ensure that work is getting done if team members are located all over the country?"
              content="Our solution includes a technology and commmunication platform that enables virtual teams to work effectively to deliver high quality software independent of their location."
            />
            <Accordion
              title="How are projects generally organized?"
              content="Every project begins with a planning phase, followed by build sprints that lead to a Minimum Viable Product that enables testing of the basic product concept.We will break down your product into releases with 
              key functionalities that achieve certain business objectives overtime.
              "
            />
            <Accordion
              title="How do you handle project management?"
              content="We use agile project management in which our processes are focused on fast iterations and pushing releases every 2 weeks after the initial launch."
            />
            <div className="row py-5">
              <div className="col text-center">
              <Link to="/contact-us"><div className="btn btn-large font-weight-bolder text-capitalize py-3 px-5">Talk to Us</div></Link>
              </div>
            </div>
        </div>
        <div>
        <Footer/>
      </div>
      </div>
    );
}


export default Faq;