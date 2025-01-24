import { Publisher, Subjects, TicketCreatedEvent } from 'fbrusa-common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  subject: Subjects.TicketCreated = Subjects.TicketCreated;
}
