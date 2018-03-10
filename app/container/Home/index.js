import React, {Component} from 'react';
import WhiteFrame from '../../components/WhiteFrame';
import TeemoPic from '../../assert/teemo-little-devil.png';

import './styles.scss';

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="home-container">
        <WhiteFrame className="top-bar">
          <div className="brand-logo">
            <img src={TeemoPic} />
          </div>
          <div className="nav-menu">
            <div className="nav-menu-item"><span>Home</span></div>
            <div className="nav-menu-item"><span>Register</span></div>
            <div className="nav-menu-item"><span>About Us</span></div>
            <div className="nav-menu-item"><span>Contract</span></div>
          </div>
        </WhiteFrame>
      </div>
    );
  }

}

export default Home;