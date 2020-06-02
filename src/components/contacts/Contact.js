import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { Consumer } from '../../context';

class Contact extends Component {
  state = {
    showContactInfo: false,
  }

  deleteOnClick = (id, dispatch) => {
    dispatch({ type: 'DELETE_CONTACT', payload: id });
  }

  render() {
    const { contact: { name, email, phone, id } } = this.props;
    const { showContactInfo } = this.state;
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className='card card-body mb-3'>
              <h4>{name}{' '}
                <i onClick={() => this.setState({ showContactInfo: !this.state.showContactInfo })}
                  className='fa fa-sort-desc'
                  style={{ cursor: 'pointer' }}
                />
                <i className='fa fa-times'
                  style={{ cursor: 'pointer', float: 'right', color: 'red' }}
                  onClick={this.deleteOnClick.bind(this, id, dispatch)}
                />
              </h4>
              {showContactInfo ? <ul className='list-group'>
                <li className='list-group-item'>Email: {email}</li>
                <li className='list-group-item'>Phone: {phone}</li>
              </ul> : null}
            </div>
          )
        }}
      </Consumer>
    )
  }
}


Contact.propTypes = {
  contact: PropTypes.object.isRequired,

}

export default Contact;

