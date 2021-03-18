import React from 'react';
import PropTypes from 'prop-types';

import { getFunName } from '../helpers';

class RoomSelector extends React.Component {
  myInput = React.createRef();
  static propTypes = {
    history: PropTypes.object
  };

  goToRoom = (event) => {
    //Prevent the default (form submission to server)
    event.preventDefault();
    //2. Get text from input
    const roomName = this.myInput.current.value;
    //3. Change page to /room/the-text-input
    this.props.history.push(`/room/${roomName}`);
  }

  render () {
    return (
      <React.Fragment>
      <form className='roomSelector' onSubmit={this.goToRoom}>
        <h1 className = 'bannerText'>Math with Friends</h1>
        <h2>Please Enter a Calculator Name</h2>
        <input
          type='text'
          ref={this.myInput}
          required
          placeholder='Room Name'
          defaultValue={getFunName()}
          />
        <button id='roomSelectorButton' type = 'submit' className='submitButton'>Lets Compute →</button>
        <h3>Each room has an independent calculator log!</h3>
      </form>
      </React.Fragment>
    )
  }
}

export default RoomSelector;