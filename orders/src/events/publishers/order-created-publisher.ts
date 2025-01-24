import { Publisher, OrderCreatedEvent, Subjects } from 'fbrusa-common';

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
}
