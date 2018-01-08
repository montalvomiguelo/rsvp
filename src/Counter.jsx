import React from 'react';
import PropTypes from 'prop-types';

function Counter(props) {
  const totalGuests = props.guests.length;
  const unconfirmed = props.guests.filter(guest => !guest.isConfirmed);
  const totalUnconfirmed = unconfirmed.length;
  const totalAttending = totalGuests - totalUnconfirmed;

  return (
    <table className="counter">
      <tbody>
        <tr>
          <td>Attending:</td>
          <td>{totalAttending}</td>
        </tr>
        <tr>
          <td>Unconfirmed:</td>
          <td>{totalUnconfirmed}</td>
        </tr>
        <tr>
          <td>Total:</td>
          <td>{totalGuests}</td>
        </tr>
      </tbody>
    </table>
  );
}

Counter.propTypes = {
  guests: PropTypes.array.isRequired
};

export default Counter;
