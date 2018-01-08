import React from 'react';
import PropTypes from 'prop-types';

import GuestInputForm from './GuestInputForm';

function Header(props) {
  return (
    <header>
      <h1>RSVP</h1>
      <p>A TreehouseApp</p>
      <GuestInputForm
        handleNameInput={props.handleNameInput}
        newGuestSubmitHandler={props.newGuestSubmitHandler}
        pendingGuest={props.pendingGuest}
      />
    </header>
  );
}

Header.propTypes = {
  newGuestSubmitHandler: PropTypes.func.isRequired,
  handleNameInput: PropTypes.func.isRequired,
  pendingGuest: PropTypes.string.isRequired,
};

export default Header;
