import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Socket } from 'ngx-socket-io';

@Injectable({
  providedIn: 'root'
})
export class SocketService {
  constructor(private socket: Socket) {}

  /**
   * Send Message to web socket server
   *
   * @param eventName socket io event
   * @param message Message will be send
   */
  sendMessage(eventName: string, message: any): void {
    this.socket.emit(eventName, message);
  }

  /**
   * Recived messages from web socket server
   *
   * @param eventName socket io lestening event
   * @returns Message recived from the socket server
   */
  getMessages(eventName: string): Observable<any> {
    return this.socket.fromEvent(eventName).pipe(map(data => data));
  }
}
