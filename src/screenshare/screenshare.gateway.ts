import { SubscribeMessage, WebSocketGateway, OnGatewayConnection, OnGatewayDisconnect } from '@nestjs/websockets';
import { Socket } from 'socket.io';

@WebSocketGateway()
export class ScreenshareGateway implements OnGatewayConnection, OnGatewayDisconnect {

  private clients : Socket[] = []

  handleDisconnect(client: Socket) {
    console.log("client disconnected !")
    this.clients = this.clients.filter(c => c.id != client.id)
  }

  handleConnection(client: Socket, ...args: any[]) {
    console.log("Client connected !")
    this.clients.push(client)
  }

  @SubscribeMessage('sendOffer')
  handleMessage(client: Socket, payload: any) {
    this.clients.forEach(c => {
      if(c.id == client.id){
        return
      }
      console.log("forwarding offer")

      c.emit("receiveOffer",payload)
      c.emit("okxd","lol")
      console.log(payload)
    })
  }


  
  @SubscribeMessage('sendAnswer')
  handleMessage2(client: Socket, payload: any) {
    this.clients.forEach(c => {
      if(c.id == client.id){
        return
      }
      console.log("forwarding answer")
      c.emit("receiveAnswer",payload)
      console.log(payload)
    })
  }
}
