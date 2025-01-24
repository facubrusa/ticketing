import { Subjects, Publisher, PaymentCreatedEvent } from 'fbrusa-common';

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  subject: Subjects.PaymentCreated = Subjects.PaymentCreated;
}
