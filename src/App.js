import React from 'react';
import CreateTicket from './containers/CreateTicket';
import TicketList from './containers/TicketList';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const stylesApp = {
  marginTop: 40
}


function App() {
  return (
    <div className="container">
      <div className="row" style={ stylesApp }>
        <div className="col-md-6">
          <CreateTicket />
        </div>
        <div className="col-md-6">
          <TicketList />
        </div>
      </div>
    </div>
  );
}

export default App;
