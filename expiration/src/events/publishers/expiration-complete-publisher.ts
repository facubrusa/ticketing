import {
  Subjects,
  Publisher,
  ExpirationCompleteEvent,
} from 'fbrusa-common';

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;
}
