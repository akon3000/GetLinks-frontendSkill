import React, {Component} from 'react';
import { Row, Col } from 'react-bootstrap';
import WhiteFrame from '../../components/WhiteFrame';
import TeemoPic from '../../assert/teemo-little-devil.png';
import MoustachePic from '../../assert/moustache.svg';

import './styles.scss';

import Feeds from './feeds.json';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      feed: Feeds
    };
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
        <div className="flex-content">
          <div className="flex-box">
            <img src={MoustachePic} />
            <p>The word "moustache" is French, and is derived from the Italian moustacio (fourteenth century), dialectal mostaccio (16th century), from Medieval Latin moustaccium (eighth century), Medieval Greek μοστάκιον (moustakion), attested in the ninth century, which ultimately originates as a diminutive of Hellenistic Greek μύσταξ (mustax, mustak-), meaning "upper lip" or "facial hair",[2] probably derived from Hellenistic Greek μύλλον (mullon), "lip".</p>
          </div>
        </div>
        <WhiteFrame>
          <br />
          <div className="container">
            <Row>
              {
                this.state.feed.map(function(x) {
                  return (
                    <Col key={`col-${x.ref}`} lg={3} md={4} sm={6} xs={12}>
                      <iframe src={x.media} allow="autoplay; encrypted-media"></iframe>
                      <h4><b>{x.title}</b></h4>
                      <p>{x.description}</p>
                      <br />
                    </Col>
                  );
                })
              }
            </Row>
          </div>
        </WhiteFrame>
        <div className="flex-content" style={{ height: 100 }}>
          <div className="flex-box">
          © 2018 Power by akon300(Tinnapop Suraphon), Thank you for visiting.
          </div>
        </div>
      </div>
    );
  }

}

export default Home;