import React, { Component } from 'react'
import LeftFire from './LeftFire'
import MiddleFire from './MiddleFire'
import RightFire from './RightFire'

class Index extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }

  componentWillUnmount() {
    cancelAnimationFrame(this.animateId)
  }
  render() {
    return (
      <div id='ind' style={{
        width: '100%',
        height: window.innerHeight,
        background: '#001527',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
      }}>
        <LeftFire />
        <MiddleFire />
        <RightFire />
      </div>
    )
  }
}
export default Index