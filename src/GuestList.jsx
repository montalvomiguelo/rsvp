import React from 'react';
import PropTypes from 'prop-types';

function GuestList(props) {
  return (
    <ul guests={props.guests}>
      {props.guests.map((guest, index) => (
        <li key={index}>
          <span>{guest.name}</span>
          <label>
            <input
              type="checkbox"
              checked={guest.isConfirmed}
            /> Confirmed
          </label>
          <button>edit</button>
          <button>remove</button>
        </li>
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
