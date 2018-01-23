import React, { Component } from 'react'
import { Layout } from 'antd'

class Player extends Component {

  constructor({
    id, name = 'anonymous', isHost = false, color = '#6ecfff', 
    img = 'http://img.25pp.com/uploadfile/app/icon/20161025/1477405420543256.jpg',
    heroCount = 0, troop = 0, money = 0, citiesCount = 0
  }) {
    this.id = id
    this.name = name
    this.color = color
    this.img = img
    this.heroCount = heroCount
    this.troop = troop
    this.money = money
    this.citiesCount = citiesCount
    this.readyStatus = sg_constant.user_status.unready
    this.isHost = isHost
  }

  render() {
    //房主不能踢自己
    const kickHtml = this.isHost ? "" : `<button class="kick">踢人</button>`
    return (
      <div class="player">
        <div class="left">
          <div class="player-pic-mask">${kickHtml}</div>
          <div style="background-image:url(${this.img})" class="player-pic"></div>
          <div class="name" style="background-color:${this.color}"><i id="ready-pic-${this.id}" class="fa fa-hand-paper-o" aria-hidden="true"></i>${this.name}</div>
        </div><div class="right">
          <div class="text">武将数: ${this.heroCount}</div>
          <div class="text">银两: ${this.money}</div>
          <div class="text">兵力: ${this.troop}</div>
          <div class="text">城池数: ${this.citiesCount}</div>
        </div>
      </div>
    )
  }
}

export default Player