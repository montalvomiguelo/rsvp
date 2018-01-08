import React from 'react';
import PropTypes from 'prop-types';

function Counter(props) {
  return (
    <table className="counter">
      <tbody>
        <tr>
          <td>Attending:</td>
          <td>{props.totalAttending}</td>
        </tr>
        <tr>
          <td>Unconfirmed:</td>
          <td>{props.totalUnconfirmed}</td>
        </tr>
        <tr>
          <td>Total:</td>
          <td>{props.totalGuests}</td>
        </tr>
      </tbody>
    </table>
  );
}

Counter.propTypes = {
  totalAttending: PropTypes.number.isRequired,
  totalUnconfirmed: PropTypes.number.isRequired,
  totalGuests: PropTypes.number.isRequired
};

export default Counter;
