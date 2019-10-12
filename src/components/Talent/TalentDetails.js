import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './TalentDetails.css';

class TalentDetails extends Component {
  render() {
    let { talent } = this.props;
    return (
      <div className="container">
      <div className="TalentDetails row justify-content-center mt-5">
          <div className="col-11 col-5-lg">
              <div className="TalentDetails-card card">
                  <img className="card-img-top" src={talent.src} alt={talent.name}/>
                  <div className="card-body">
                      <h2 className="card-title">
                        {talent.name}
                      </h2>
                      <h4 className="card-subtitle text-muted">
                        {talent.age} years
                      </h4>
                  </div>
                  <ul className="list-group list-group-flush">
                      {talent.stack.map((st, i) => (
                          <li className="list-group-item stack-name" key={i}>{st}</li>
                      ))}
                  </ul>
                  <div className="card-body">
                        <Link to="/talent" className="btn btn-info"> Go Back </Link>
                  </div>
              </div>
              </div>
          </div>
      </div>
    )
  }
}

export default TalentDetails;