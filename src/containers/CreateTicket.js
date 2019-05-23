// CreateTicket.js

import { connect } from 'react-redux';
import { createTicket } from '../actions';
import NewTicket from '../components/NewTicket';

const mapDispatchToProps = dispatch => {
  return {
    onAddTicket: ticket => {
      dispatch(createTicket(ticket));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(NewTicket);