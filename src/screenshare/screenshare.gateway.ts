import { SubscribeMessage, WebSocketGateway, OnGatewayConnection, OnGatewayDisconnect } from '@nestjs/websockets';
import { Socket } from 'socket.io';

import Peer = require("simple-peer");
const RTCserver = require("rtcmulticonnection-server")

type PeerSocket = {
  socket : Socket
  peer : Peer.Instance
}

@WebSocketGateway()
export class ScreenshareGateway implements OnGatewayConnection, OnGatewayDisconnect {

  private clients : PeerSocket[] = []

  handleDisconnect(client: Socket) {
    console.log("client disconnected !")
    //this.clients = this.clients.filter(c => c.socket.id != client.id)
  }

  handleConnection(client: Socket, ...args: any[]) {
    console.log("Client connected !")
   /* const peer = new Peer({initiator:true,wrtc, config:{}})
        this.initPeer(client,peer)
    this.clients.push({socket:client, peer:peer})*/
    RTCserver.addSocket(client)
  }

  /*initPeer(socket, peer){
    console.log("initiating peer")
    try{
      peer.on('signal', data => {
        socket.emit("message", data)
      })
      
      peer.on('connect', () => {
        // wait for 'connect' event before using the data channel
        console.log("connected !")
      })
      
      peer.on('data', data => {
        // got a data channel message
        console.log('got a message from peer1: ' + data)
      })
      peer.on("stream", stream => {
            console.log("got a stream")
            this.clients.forEach(c => {
              if(c.socket.id == socket.id){
                return
              }
              c.peer && c.peer.addStream(stream)
            })
      })

      peer.on("error",error => {
        console.log(error)
      })

    }catch(err){
      console.log(err)
    }
   
  }

  @SubscribeMessage('message')
  handleMessage0(client: Socket, payload: any) {
    this.clients.forEach(c => {
      if(payload.type == "offer"){
        console.log(payload)
   
      }
      if(c.socket.id == client.id){
        if(payload.type == "offer" || payload.type =="answer" || payload.candidate )
            c.peer.signal(payload)
          return
      }
    })
  }
*/
}
