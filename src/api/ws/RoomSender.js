/**
 * Created by yuanxiang on 12/28/17.
 * 发送请求,业务和房间相关
 */
export default class RoomSender {
  constructor(socket) {
    this.socket = socket
  }

  enterGameRoom() {
    console.log("send enterGameRoom ")
    this.socket.emit("enterRoom")
  }

  quitGameRoom(isKick = false) {
    console.log("send quitGameRoom ", isKick)
    this.socket.emit("quitRoom", isKick)
  }

  toReady() {
    console.log("send toReady")
    this.socket.emit("toReady")
  }

  toUnready() {
    console.log("send toUnready ")
    this.socket.emit("toUnready")
  }

  readyCheck() {
    console.log("send readyCheck ")
    this.socket.emit("readyCheck")
  }

  kick(kickUserId) {
    console.log("send kick ", kickUserId)
    this.socket.emit("kick", kickUserId)
  }

  addChatMessage(message) {
    console.log("send addChatMessage ", message)
    this.socket.emit("addChatMessage", message)
  }

}