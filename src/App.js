import React, { Component } from 'react';
import './App.css';
import GuestList from './GuestList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
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

  render() {
    return (
      <div className="App">
       <header>
          <h1>RSVP</h1>
          <p>A Treehouse App</p>
          <form>
              <input type="text" value="Safia" placeholder="Invite Someone" />
              <button type="submit" name="submit" value="submit">Submit</button>
          </form>
        </header>
        <div className="main">
          <div>
            <h2>Invitees</h2>
            <label>
              <input type="checkbox" /> Hide those who haven't responded
            </label>
          </div>
          <table className="counter">
            <tbody>
              <tr>
                <td>Attending:</td>
                <td>2</td>
              </tr>
              <tr>
                <td>Unconfirmed:</td>
                <td>1</td>
              </tr>
              <tr>
                <td>Total:</td>
                <td>3</td>
              </tr>
            </tbody>
          </table>
          <GuestList
            guests={this.state.guests}
            toggleConfirmationAt={this.toggleConfirmationAt.bind(this)}
            toggleEditingAt={this.toggleEditingAt.bind(this)}
            setNameAt={this.setNameAt.bind(this)}
          />
        </div>
      </div>
    );
  }
}

export default App;
