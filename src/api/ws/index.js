import GameReceiver from "./GameReceiver"
import GameSender from "./GameSender"
import RoomReceiver from "./RoomReceiver"
import RoomSender from "./RoomSender"

const initWs = socket => {
  const gameReceiver = new GameReceiver(socket)
  const gameSender = new GameSender(socket)
  const roomReceiver = new RoomReceiver(socket)
  const roomSender = new RoomSender(socket)
  return {
    gameReceiver, gameSender, roomReceiver, roomSender
  }
}

export default initWs