import { Injectable } from '@angular/core';
import io from 'socket.io-client';
import { ToastController } from 'ionic-angular';

@Injectable()
export class SocketProvider {

  /**
   * Url do socket
   *
   */
  private socketUrl;
  
  /**
   * Instancia do socket
   *
   */
  private socket;

  /**
   * Indica se a conexao esta ativa
   *
   */
  public connected = false;

  /**
   * Seta o ip do socket
   *
   */
  set ip(ip) {
    this.socketUrl = `http://${ip}:3000`;
    this.socket = io(this.socketUrl);
    this.socket.on('connect_failed', () => {
      this.connected = false;
      const toast = this.toast.create({
        message: 'Erro ao conectar ao computador'
      });
      toast.present();
    });
    this.socket.on('connect', () => {
      this.connected = true;
      const toast = this.toast.create({
        message: 'Conectado com sucesso ao computador'
      });
      toast.present();
    })
  }

  /**
   * Metodo construtor
   *
   * @param toast 
   */
  public constructor(public toast: ToastController) {}

  /**
   * Envia um dado via socket
   *
   * @param data 
   */
  send(data) {
    if ( this.socket ) this.socket.emit('keypressed', {data});
  }
}

// End of file
