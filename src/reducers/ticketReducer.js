// ticketReducer.js

import { ADD_TICKET, DELETE_TICKET, FETCH_TICKET } from '../actions/types';

export default function ticketReducer(state = [], action) {
  switch (action.type) {
    case ADD_TICKET:
      return [...state, action.payload];
    case DELETE_TICKET:
      return state.filter(ticket => ticket.id !== action.payload.id);
    case FETCH_TICKET:
      return action.tickets;
    default:
      return state;
  }
}