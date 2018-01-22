import React, { Component } from 'react'
import { Card, message, Rate, Icon } from 'antd'
import { getRooms, enterRoom } from "../../api/http/roomList"
import { Redirect } from 'react-router-dom'

class RoomList extends Component {

  constructor(props){
    super(props)
    this.state = {
      rooms: []
    }
  }

  async updateRoom() {
    let result
    try {
      result = await getRooms()
    } catch (e) {
      return message.error(e.response.data)
    }
    const rooms = result.data
    this.setState({ rooms })
  }

  componentDidMount() {
    this.updateRoom()
    setInterval(() => {
      this.updateRoom()
    }, 5000)
  }

  handleEnterRoom = async roomNo => {
    try {
      await enterRoom(roomNo)
      this.setState({ redirectToGameRoom: roomNo })
    } catch (e) {
      message.error(e.response.data)
    }
  }

  render() {

    if (this.state.redirectToGameRoom) {  
      return <Redirect to={`/room/${this.state.redirectToGameRoom}`}/>
    }
    const {rooms} = this.state
    const gridStyle = {
      width: '25%',
      textAlign: 'left'
    }
    return (
      <Card title="游戏大厅" hoverable="true" style={{
        width: 800, position: 'absolute', left: '50%', top: '50%',
        transform: 'translateX(-50%) translateY(-50%)', textAlign: 'center'
      }}>
        {
          rooms.map(room => <Card.Grid id={room.roomNo} key={room.roomNo} style={{...gridStyle}} onClick={this.handleEnterRoom.bind(this, room.roomNo)}>
            <p>房间号码：{room.roomNo}</p>
            <p>游戏状态：{room.isGaming ? "游戏中" : "未开始"}</p>
            当前玩家：<Rate character={<Icon type="user" />} disabled defaultValue={room.currentNum} count={room.maxNum}/>
          </Card.Grid>)
        }
      </Card> 
    )
  }
}

export default RoomList