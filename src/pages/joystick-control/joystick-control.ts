import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SocketProvider } from '../../providers/socket/socket';

@Component({
  selector: 'page-joystick-control',
  templateUrl: 'joystick-control.html',
})
export class JoystickControlPage {

  /**
   * Metodo construtor
   *
   * @param navCtrl 
   * @param navParams 
   */
  constructor(public navCtrl: NavController, public socket: SocketProvider) {}

  /**
   * Envia a key pressionada
   *
   * @param key 
   */
  keyPressed(key) {
    this.socket.send({
      time: (new Date()).getTime(),
      key,
      type: 'start'
    })
  }

  /**
   * Envia a key solta
   *
   * @param key 
   */
  keyReleased(key) {
    this.socket.send({
      time: (new Date()).getTime(),
      key,
      type: 'end'
    })
  }
}

// End of file
