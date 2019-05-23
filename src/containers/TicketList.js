// TicketList.js

import React from 'react';
import { connect } from 'react-redux';
import Ticket from '../components/Ticket';
import { deleteTicket } from '../actions';

function TicketList({ tickets, onDelete }) {
  if(!tickets.length) {
    return (
      <div>
        No Tickets
      </div>
    )
  }
  return (
    <div>
      {tickets.map(ticket => {
        return (
          <Ticket ticket={ ticket } onDelete={ onDelete } key={ ticket.id } />
        );
      })}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    tickets: state.tickets
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onDelete: id => {
      dispatch(deleteTicket(id));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TicketList);