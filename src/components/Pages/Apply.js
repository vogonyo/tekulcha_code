import React, { Component }  from 'react';
import { ReactTypeformEmbed } from 'react-typeform-embed';

const FormStyles = {
  scrollbarWidth: '1px',
  minHeight: '70vh',
  marginBottom: '2em'
}

class Apply extends Component {
  constructor(props) {
    super(props);
    this.openForm = this.openForm.bind(this);
  }

  openForm() {
    this.typeformEmbed.typeform.open();
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-2 col-lg-2 col-sm-12"></div>
          <div className="col-md-8 col-lg-8 col-sm-12"> <h3 className="text-monospace text-center py-5 text-muted font-weight-bolder"> Apply to become an engineer</h3></div>
          <div className="col-md-2 col-lg-2 col-sm-12"></div>
        </div>
        <div className="row my-5">
          <div className="col-md-12 col-lg-12 col-sm-12">
              <ReactTypeformEmbed
                popup={false}
                autoOpen={false}
                url="https://victor960.typeform.com/to/beXqZ8"
                hideHeaders
                hideFooter
                buttonText="Go!"
                style={FormStyles}
                ref={tf => {
                  this.typeformEmbed = tf;
                }}
              />
          </div>
        </div>
      </div>
    );
  }
}
export default Apply;