import React from 'react';
import NewTicket from './components/NewTicket';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <NewTicket />
        </div>
        <div className="col-md-6">
          Display Post
        </div>
      </div>
    </div>
  );
}

export default App;
