import React, { Component } from 'react'
import './ticTacToe.css'

import Board from './components/Board'

const INITIAL_STATE = {
  history: [{
    squares: Array(9).fill(null),
  }],
  current: { squares: Array(9).fill(null) },
  freeSpaces: [0, 1, 2, 3, 4, 5, 6, 7, 8 ],
  stepNumber: 0,
  xIsNext: true
}

class App extends Component {
  constructor() {
    super()
    this.state = Object.assign( {}, INITIAL_STATE )
  }

  handleClick( i ) {
    const { history, xIsNext, freeSpaces, current } = this.state
    const squares = current.squares.slice()

    if (this.calculateWinner(squares) || squares[i]) {
      return
    }

    squares[i] = this.state.xIsNext ? 'X' : 'O'

    this.setState({
      history: history.concat([{
        squares
      }]),
      current: { squares },
      freeSpaces: freeSpaces.filter( index => index !== i ),
      stepNumber: history.length,
      xIsNext: !xIsNext,
    }, this.aiMove )
  }

  aiMove() {
    const { xIsNext, freeSpaces, current } = this.state
    const squares = current.squares.slice()

    if( ! xIsNext && this.calculateWinner( squares ) === null ) {
      const randomMove = Math.floor( Math.random() * freeSpaces.length )

      setTimeout( () => this.handleClick( freeSpaces[ randomMove ]), 500 )
    }
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) ? false : true,
    })
  }

  moves() {
    const { history } = this.state

    return history.map( (step, move) => {
      const desc = move ?
        'Move #' + move :
        'Game start'

      return (
        <li key={move}>
          <a href="#" onClick={() => this.jumpTo(move)}>{desc}</a>
        </li>
      )
    })
  }

  status() {
    const { history, stepNumber, xIsNext } = this.state
    const { squares } = history[ stepNumber ]
    const winner = this.calculateWinner( squares )

    if( winner ) {
      return 'Winner: ' + winner
    } else {
      return 'Next player: ' + (xIsNext ? 'X' : 'O')
    }
  }

  calculateWinner() {
    const { history, stepNumber, xIsNext } = this.state
    const { squares } = history[ stepNumber ]

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

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i]
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a]
      }
    }
    return null
  }

  render() {
    const { history, stepNumber } = this.state
    const { squares } = history[ stepNumber ]

    return (
      <div className="game">
        <div>
          <Board
            squares={squares}
            onClick={(i) => this.handleClick(i)}
          />
        </div>
        <div className="game-info">
          <div>{this.status()}</div>
          <ol>{this.moves()}</ol>
        </div>
      </div>
    )
  }
}

export default App
