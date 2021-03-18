import React from 'react';
import PropTypes from 'prop-types';

class Header extends React.Component{
  render () {
    return(
          <header className='bannerText'>
            Math with Friends <br/>
            Room: {this.props.roomId}
          </header>
      );
  };
}

Header.propTypes = {
  roomId: PropTypes.string.isRequired
};

export default Header;