import React, { Component } from 'react'
import { connect } from 'react-redux'
import { enterRoom } from "../../api/http/roomList"
import { message } from 'antd'
import initWs from "../../api/ws"
import io from "socket.io-client"
import "./index.css"

class GameRoom extends Component {

  constructor(props){
    super(props)
    this.initNetwork()
  }

  /**
   * 初始化网络
   */
  async initNetwork() {
    const roomNo = this.props.match.params.roomNo
    try {
      //为了解决进入游戏后,刷新出错的问题,这里也执行一次enterRoom方法
      await enterRoom(roomNo)
    } catch (err) {
      //TODO 这里需要测试一下
      return message.error(err.response.data)
    }

    const socket = io("/room/" + roomNo)

    this.controller = initWs(socket)

  }

  render() {
    return (
      <div className="outer-box">
        <div className="td">
          <div className="lcd"></div>
          <div className="ccd"></div>
          <div className="rcd"></div>
        </div>
        <div className="bcd"></div>
      </div>
    )
  }
}
const mapStateToProps = ({}) => ({})
const mapDispatchToProps = dispatch => ({})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GameRoom)