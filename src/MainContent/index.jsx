import React from 'react';
import PropTypes from 'prop-types';

import GuestList from './GuestList';
import Counter from './Counter';
import ConfirmedFilter from './ConfirmedFilter';

function MainContent(props) {
  const totalGuests = props.totalGuests;
  const totalAttending = props.totalAttending;
  const totalUnconfirmed = props.totalUnconfirmed;

  return(
    <div className="main">
      <ConfirmedFilter
        handleFilterChange={props.toggleFilter}
        isFiltered={props.isFiltered}
      />
      <Counter
        totalGuests={totalGuests}
        totalAttending={totalAttending}
        totalUnconfirmed={totalUnconfirmed}
      />
      <GuestList
        guests={props.guests}
        toggleConfirmationAt={props.toggleConfirmationAt.bind(props)}
        toggleEditingAt={props.toggleEditingAt.bind(this)}
        removeGuestsAt={props.removeGuestsAt.bind(this)}
        setNameAt={props.setNameAt.bind(this)}
        isFiltered={props.isFiltered}
        pendingGuest={props.pendingGuest}
      />
    </div>
  );
}

MainContent.propTypes = {
  totalGuests: PropTypes.number.isRequired,
  totalAttending: PropTypes.number.isRequired,
  totalUnconfirmed: PropTypes.number.isRequired,
  toggleFilter: PropTypes.func.isRequired,
  isFiltered: PropTypes.bool.isRequired,
  guests: PropTypes.array.isRequired,
  toggleConfirmationAt: PropTypes.func.isRequired,
  toggleEditingAt: PropTypes.func.isRequired,
  removeGuestsAt: PropTypes.func.isRequired,
  setNameAt: PropTypes.func.isRequired,
  pendingGuest: PropTypes.string.isRequired
};

export default MainContent;
