import React from 'react';
import PropTypes from 'prop-types';
import Guest from './Guest';

function GuestList(props) {
  return (
    <ul guests={props.guests}>
      {props.guests.map((guest, index) => (
        <Guest key={index} name={guest.name} isConfirmed={guest.isConfirmed} />
      ))}
    </ul>
  );
}

GuestList.propTypes = {
  guests: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    isConfirmed: PropTypes.bool.isRequired
  })).isRequired
};

export default GuestList;
