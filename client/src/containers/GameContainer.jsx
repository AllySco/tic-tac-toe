import React from 'react'
import Box from '../components/Box'

class GameContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      boxes: [null,null,null,null,null,null,null,null,null],
      xIsNext: true
    }
  }

  handleClick(index) {
    const boxes = this.state.boxes.slice()
    if(Winner(boxes) || boxes[index]) {
      return
    }
    boxes[index] = this.state.xIsNext ? 'X' : 'O'
    this.setState({
      boxes: boxes,
      xIsNext: !this.state.xIsNext
    })
  }

  resetBoard(event) {
    event.preventDefault()
    this.setState({boxes: [null,null,null,null,null,null,null,null,null]})
  }

  renderBox(index) {
    return (
      <Box 
        value={this.state.boxes[index]}
        onClick={() => this.handleClick(index)} 
    />
    )
  }

  render() {
    const winCheck = Winner(this.state.boxes)
    let status
    if(winCheck) {
      status = 'Winner: ' + winCheck;
    } else {
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O')
    }

    return(
      <div>

      <div className="everything">
      <h1>TicTacToe</h1>
      </div>
      <div id="game-container" className="status">{status}
      </div>
      <div className="board-row">
      {this.renderBox(0)}
      {this.renderBox(1)}
      {this.renderBox(2)}
      </div>

      <div className="board-row">
      {this.renderBox(3)}
      {this.renderBox(4)}
      {this.renderBox(5)}
      </div>

      <div className="board-row">
      {this.renderBox(6)}
      {this.renderBox(7)}
      {this.renderBox(8)}
      </div>

      <div className="reset">
      <button className="reset-button" type="submit" onClick={ this.resetBoard.bind(this) }>Reset
      </button>
      </div>

      </div>
      )
  }

}

function Winner(boxes) {
  const lines = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
  ]

  for(let i=0; i < lines.length; i++) {
    const [a, b, c] = lines[i]
    if(boxes[a] && boxes[a] === boxes[b] && boxes[a] === boxes[c]) {
      return boxes[a]
    }
  }
return null
} 

export default GameContainer