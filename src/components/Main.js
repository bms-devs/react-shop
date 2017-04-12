require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';

let reactImage = require('../images/react-logo.png');

class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
        <img src={reactImage} alt="ReactJS" />
        <div className="notice">ReactShop</div>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
