import React, { Component } from 'react';
import TalentList from './TalentList';
import TalentDetails from './TalentDetails';
import Victor from '../static/images/talent/vic.jpg';
import Evans from '../static/images/talent/evans.jpg';
import George from '../static/images/talent/george.jpg';
import Warugu from '../static/images/talent/warugu.jpg';
import Joy from '../static/images/talent/joy.jpg';
import Jackie from '../static/images/talent/jackie.jpg';
import Martin from '../static/images/talent/martin.jpg';
import Kelvin from '../static/images/talent/kelvin.jpg';
import Teresa from '../static/images/talent/teresa.jpg';
import Jee from '../static/images/talent/Jee.jpg';

import { Switch, Route } from 'react-router-dom';

class Talent extends Component{
  static defaultProps = {

    talent:[
      {
        name: "Victor",
        age: 28,
        src: Victor,
        stack: [
          "Node.js",
          "Flutter",
          "Swift",
          "Python",
          "Javascript"
        ]
      },
      {
        name: "Jackie",
        age: 28,
        src: Jackie,
        stack: [
          "Angular.js",
          "Python",
          "Javascript",
          "React.js",
          "Java",
          "CSS"
        ]
      },
      {
        name: "Martin",
        age: 33,
        src: Martin,
        stack: [
          "Payments",
          "Python",
          "Django",
          "Java"
        ]
      },
      {
        name: "Kelvin",
        age: 27,
        src: Kelvin,
        stack: [
          "USSD/SMS",
          "Python",
          "PHP",
          "APIs"
        ]
      },
      {
        name: "Joy",
        age: 26,
        src: Warugu,
        stack: [
          "Machine Learning",
          "Data Science",
          "Python",
          "R"
        ]
      },
      {
        name: "Evans",
        age: 29,
        src: Evans,
        stack: [
          "Ruby",
          "Ruby on Rails",
          "React.JS",
          "Sass",
          "Less"
        ]
      },
      {
        name: "George",
        age: 24,
        src: George,
        stack: [
          "Python",
          "Django",
          "PostgreSQL",
          "Flask",
          "Vue.js"
        ]
      },
      {
        name: "J Karuti",
        age: 25,
        src: Joy,
        stack: [
          "Wordpress",
          "PHP",
          "mySQL",
          "Android",
          "Java"
        ]
      },
      {
        name: "Jee",
        age: 32,
        src: Jee,
        stack: [
          "MongoDB",
          "NodeJS",
          "Linux",
          "Javascript"
        ]
      },
      {
        name: "Teresa",
        age: 30,
        src: Teresa,
        stack: [
          "Data Mapping",
          "Python",
          "Java(Spark)",
          "Spatial Databases",
          "Arc Map"
        ]
      }
    ]
  }
  render(){
    const getTalent = (props) =>{
      let name = props.match.params.name;
      let currentTalent = this.props.talent.find(
        talent => talent.name.toLowerCase() === name.toLowerCase()
      );
      return <TalentDetails {...props} talent={currentTalent}/>
    }
    return(
      <Switch>
         <Route exact path='/talent' render={() => <TalentList talent={this.props.talent}/>}/>
         <Route exact path='/talent/:name' render={getTalent}/>
      </Switch>
    );
   }
};


export default Talent;
