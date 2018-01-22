import React, { Component } from 'react'

class GameRoom extends Component {

  render() {
    console.log("GameRoom", this.props.match.params.roomNo)
    return (
      <div style={{ background: '#ECECEC', padding: '30px' }}>游戏大厅</div>
    )
  }
}

export default GameRoom