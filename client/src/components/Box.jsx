import React from 'react'

class Box extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: null
    }
  }

  render() {
    return(
      <button className='box' onClick={() => this.props.onClick()}>
      {this.props.value}
      </button>
    )
  }
}

export default Box