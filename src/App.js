import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as contactAction from './actions/contactAction';

class App extends Component {

  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      name: ''
    }
  }

  handleChange(e){
    this.setState({
      name: e.target.value
    })
  }

  handleSubmit(e){
    e.preventDefault();
    console.log(this.state.name);
  }

  render() {
    let name
    return(
      <div>
        <h1>Clientside Contacts Application</h1>
        <hr />
        {/* <ul>
          {this.props.contacts.map((contact, i) => <li key={i}>{contact.name}</li> )}
        </ul> */}
        <div>
          <h3>Add Contact Form</h3>
          <form onSubmit={this.handleSubmit}>
            <input type="text" onChange={this.handleChange} />
            <input type="submit" />
          </form>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    contacts: state.contacts
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    createContact: contact => dispatch(contactAction.createContact(contact))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
