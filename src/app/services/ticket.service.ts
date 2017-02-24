import { Injectable } from '@angular/core';
import { TICKETS } from './mocks/tickets.mock';

@Injectable()
export class TicketService{
  miVariableTicketGlobal = "Soy variable global";

  getTickets(){
    return TICKETS;
  }
  getVariableGlobal():string{
    return this.miVariableTicketGlobal;
  }
}
