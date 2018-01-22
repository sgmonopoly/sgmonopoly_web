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
//{room.currentNum + "/" + room.maxNum}
    const {rooms} = this.state
    const gridStyle = {
      width: '25%',
      textAlign: 'center'
    }
    return (
      <div style={{ background: '#ECECEC', padding: '30px' }}>
        <Card title="游戏大厅" hoverable="true">
          {
            rooms.map(room => <Card.Grid id={room.roomNo} key={room.roomNo} style={gridStyle} onClick={this.handleEnterRoom.bind(this, room.roomNo)}>
              <p>房间号:{room.roomNo}</p>
              <p>状态:{room.isGaming ? "游戏中" : "未开始"}</p>
              <p>人数:<Rate character={<Icon type="user" />} disabled defaultValue={room.currentNum} count={room.maxNum}/></p>
            </Card.Grid>)
          }
        </Card>
      </div>
    )
  }
}

export default RoomList