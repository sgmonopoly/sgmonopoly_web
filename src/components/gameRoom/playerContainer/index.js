import React, { Component } from 'react'
import { connect } from 'react-redux'

class PlayerContainer extends Component {

  render() {
    return (
      <div class="left-container-dom"></div>
    )
  }
}
const mapStateToProps = ({}) => ({})
const mapDispatchToProps = dispatch => ({})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlayerContainer)