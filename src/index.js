import React from 'react';
import ReactDOM from 'react-dom';
import Dashboard from './main';


const Main = () => {
  return (
    <React.Fragment>
      <Dashboard />
    </React.Fragment>
  );
}

ReactDOM.render(<Main />, document.getElementById('root'));
