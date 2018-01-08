import React from 'react';
import PropTypes from 'prop-types';

function PendingGuest(props) {
  return props.name
  ? (
    <li className="pending">
      <span>{props.name}</span>
    </li>
  )
  : null;
}

PendingGuest.propTypes = {
  name: PropTypes.string.isRequired
};

export default PendingGuest;
