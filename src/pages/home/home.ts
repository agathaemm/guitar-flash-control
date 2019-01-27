import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { JoystickControlPage } from '../joystick-control/joystick-control';
import { SocketProvider } from '../../providers/socket/socket';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {

    /**
     * Ip digitado
     *
     */
    public ip;

    /**
     * Método contrutor da classe
     * 
     * @param navCtrl 
     */
    constructor(public navCtrl: NavController, public socket: SocketProvider) {
    }

    /**
     * Conecta com o socket
     *
     */
    conectar() {
        this.socket.ip =this.ip;
    }

    /**
     * Vai para o joystick mode
     * 
     */
    goToJoystickMode() {
        this.navCtrl.push(JoystickControlPage);
    }
}

// End of file
