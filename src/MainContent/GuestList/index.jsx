import React from 'react';
import PropTypes from 'prop-types';

import Guest from './Guest';
import PendingGuest from './PendingGuest';

function GuestList(props) {
  return (
    <ul guests={props.guests}>
      <PendingGuest name={props.pendingGuest} />
      {props.guests
        .filter(guest => !props.isFiltered || guest.isConfirmed)
        .map((guest, index) => (
          <Guest
            key={guest.id}
            name={guest.name}
            isConfirmed={guest.isConfirmed}
            isEditing={guest.isEditing}
            handleConfirmation={event => props.toggleConfirmationAt(guest.id)}
            handleEditing={event => props.toggleEditingAt(guest.id)}
            handleRemove={event => props.removeGuestsAt(guest.id)}
            setName={name => props.setNameAt(name, guest.id)}
          />
      ))}
    </ul>
  );
}

GuestList.propTypes = {
  guests: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    isConfirmed: PropTypes.bool.isRequired,
    isEditing: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired
  })).isRequired,
  toggleConfirmationAt: PropTypes.func.isRequired,
  toggleEditingAt: PropTypes.func.isRequired,
  removeGuestsAt: PropTypes.func.isRequired,
  setNameAt: PropTypes.func.isRequired,
  isFiltered: PropTypes.bool.isRequired,
  pendingGuest: PropTypes.string.isRequired
};

export default GuestList;
