import React from 'react';
import PropTypes from 'prop-types';

import Guest from './Guest';

function GuestList(props) {
  return (
    <ul guests={props.guests}>
      {props.guests.map((guest, index) => (
        <Guest
          key={index}
          name={guest.name}
          isConfirmed={guest.isConfirmed}
          isEditing={guest.isEditing}
          handleConfirmation={event => props.toggleConfirmationAt(index)}
          handleEditing={event => props.toggleEditingAt(index)}
        />
      ))}
    </ul>
  );
}

GuestList.propTypes = {
  guests: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    isConfirmed: PropTypes.bool.isRequired,
    isEditing: PropTypes.bool.isRequired
  })).isRequired,
  toggleConfirmationAt: PropTypes.func.isRequired,
  toggleEditingAt: PropTypes.func.isRequired
};

export default GuestList;
