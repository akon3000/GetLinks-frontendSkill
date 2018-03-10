import React, { Component } from 'react';

import './styles.scss';

class WhiteFrame extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={`white-frame ${this.props.className || ''}`} style={this.props.style}>
        { this.props.children }
      </div>
    );
  }
}

export default WhiteFrame;