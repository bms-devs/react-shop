require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import Products from './Products';

class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
        <Products/>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
