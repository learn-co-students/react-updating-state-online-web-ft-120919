import React from 'react';
import ReactDOM from 'react-dom';
import ClickityClick from './components/ClickityClick';
import Lightswitch from './components/Lightswitch'

ReactDOM.render(
  <div>
    <ClickityClick />
    <Lightswitch toggled={false} />
  </div>,
  document.getElementById('root')
);
