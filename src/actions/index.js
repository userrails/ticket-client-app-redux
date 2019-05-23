// index.js

import { ADD_TICKET, DELETE_TICKET, FETCH_TICKET } from './types';
import axios from 'axios';

const apiUrl = 'http://localhost:4000/tickets';

export const createTicket = ({ title, body }) => {
  return (dispatch) => {
    return axios.post(`${apiUrl}`, {title, body})
      .then(response => {
        dispatch(createTicketSuccess(response.data))
      })
      .catch(error => {
        throw(error);
      });
  };
};

export const createTicketSuccess =  (data) => {
  return {
    type: ADD_TICKET,
    payload: {
      id: data.id,
      title: data.title,
      body: data.body
    }
  }
};

export const deleteTicketSuccess = id => {
  return {
    type: DELETE_TICKET,
    payload: {
      id
    }
  }
}

export const deleteTicket = id => {
  return (dispatch) => {
    return axios.delete(`${apiUrl}/${id}`)
      .then(response => {
        dispatch(deleteTicketSuccess(response.data))
      })
      .catch(error => {
        throw(error);
      });
  };
};

export const fetchTickets = (tickets) => {
  return {
    type: FETCH_TICKET,
    tickets
  }
};

export const fetchAllTickets = () => {
  return (dispatch) => {
    return axios.get(apiUrl)
      .then(response => {
        dispatch(fetchTickets(response.data))
      })
      .catch(error => {
        throw(error);
      });
  };
};