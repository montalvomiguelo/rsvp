import React, { Component } from 'react';
import './App.css';

import Header from './Header';
import MainContent from './MainContent';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFiltered: false,
      pendingGuest: "",
      guests: [
        {
          name: 'Treasude',
          isConfirmed: false,
          isEditing: false
        },
        {
          name: 'Nic',
          isConfirmed: true,
          isEditing: true
        }
      ]
    };
  }

  setNameAt(name, index) {
    const guest = this.state.guests[index];
    guest.name = name;
    this.setState(this.state);
  }

  getTotalInvited() {
    return this.state.guests.length;
  }

  toggleGuestPropertyAt(property, index) {
    this.setState((prevState, props) => {
      const guest = prevState.guests[index];
      guest[property] = !guest[property]

      return {
        guest: prevState.guest
      };
    });
  }

  toggleConfirmationAt(index) {
    this.toggleGuestPropertyAt('isConfirmed', index);
  }

  toggleEditingAt(index) {
    this.toggleGuestPropertyAt('isEditing', index);
  }

  toggleFilter() {
    this.setState((prevState, props) => ({
      isFiltered: !prevState.isFiltered
    }));
  }

  handleInputChange(field) {
    return (event) => this.setState({
      [field]: event.target.value
    });
  }

  newGuestSubmitHandler(event) {
    event.preventDefault();

    this.setState((prevState, props) => {
      prevState.guests.unshift({
        name: this.state.pendingGuest,
        isEditing: false,
        isConfirmed: false
      });

      return {
        guests: prevState.guests,
        pendingGuest: ''
      }
    });
  }

  removeGuestsAt(index) {
    this.state.guests.splice(index, 1);
    this.setState(this.state);
  }

  getTotalGuests() {
    return this.state.guests.length
  }

  getAttendingGuests() {
    return this.state.guests.reduce((accumulator, guest) => {
      return guest.isConfirmed ? accumulator + 1 : accumulator;
    }, 0);
  }

  render() {
    const totalGuests = this.getTotalGuests();
    const totalAttending = this.getAttendingGuests();
    const totalUnconfirmed = totalGuests - totalAttending;

    return (
      <div className="App">
        <Header
          newGuestSubmitHandler={this.newGuestSubmitHandler.bind(this)}
          pendingGuest={this.state.pendingGuest}
          handleNameInput={this.handleInputChange('pendingGuest').bind(this)}
        />
        <MainContent
          totalGuests={totalGuests}
          totalAttending={totalAttending}
          totalUnconfirmed={totalUnconfirmed}
          toggleFilter={this.toggleFilter.bind(this)}
          isFiltered={this.state.isFiltered}
          guests={this.state.guests}
          toggleConfirmationAt={this.toggleConfirmationAt.bind(this)}
          toggleEditingAt={this.toggleEditingAt.bind(this)}
          removeGuestsAt={this.removeGuestsAt.bind(this)}
          setNameAt={this.setNameAt.bind(this)}
          pendingGuest={this.state.pendingGuest}
        />
      </div>
    );
  }
}

export default App;
