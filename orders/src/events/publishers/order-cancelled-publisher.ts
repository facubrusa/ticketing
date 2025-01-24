import { Subjects, Publisher, OrderCancelledEvent } from 'fbrusa-common';

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}
