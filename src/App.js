import React, { Component } from 'react';
import './App.css';

import GuestList from './GuestList';
import Counter from './Counter';

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

  newsGuestSubmitHandler(event) {
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

  render() {
    return (
      <div className="App">
       <header>
          <h1>RSVP</h1>
          <p>A Treehouse App</p>
          <form onSubmit={this.newsGuestSubmitHandler.bind(this)}>
            <input
              type="text"
              value={this.state.pendingGuest}
              placeholder="Invite Someone"
              onChange={this.handleInputChange('pendingGuest')}
            />
              <button type="submit" name="submit" value="submit">Submit</button>
          </form>
        </header>
        <div className="main">
          <div>
            <h2>Invitees</h2>
            <label>
              <input
                type="checkbox"
                onChange={this.toggleFilter.bind(this)}
                checked={this.state.isFiltered}
              /> Hide those who haven't responded
            </label>
          </div>
          <Counter guests={this.state.guests} />
          <GuestList
            guests={this.state.guests}
            toggleConfirmationAt={this.toggleConfirmationAt.bind(this)}
            toggleEditingAt={this.toggleEditingAt.bind(this)}
            removeGuestsAt={this.removeGuestsAt.bind(this)}
            setNameAt={this.setNameAt.bind(this)}
            isFiltered={this.state.isFiltered}
            pendingGuest={this.state.pendingGuest}
          />
        </div>
      </div>
    );
  }
}

export default App;
