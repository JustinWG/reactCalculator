import PropTypes from 'prop-types';
import React from 'react';
import { evaluate } from 'mathjs';

class Calculator extends React.Component {
  static expressiveCharacters = ['AC','/','+','-','*','^','7','8','9','6','5','4','1','2','3','.','0','='];

  static propTypes = {
    updateNotebookList: PropTypes.array,
  }

  state = {
    displayValue: '',
    expression: '',
  }

  componentDidMount(){
    document.addEventListener('keydown', this.handleKeyDown, false);
  }

  componentWillUnmount(){
    document.removeEventListener('keydown', this.handleKeyDown, false);
  }

  handleKeyDown = (event) => {
    event.preventDefault();
    this.handleCharacter(event.key);
  }

  handleCharacter = (character) => {
    if (character === 'x' || character === '*') {
      this.appendToExpression('*');
    }	else if (character === '=' || character==='Enter') {
      this.evaluateExpression();
    } else if (character === 'AC' || character === 'Escape') {
      this.clearScreen();
    } else if (character === 'Backspace') {
      this.removeFromExpression();
    } else if (Calculator.expressiveCharacters.includes(character)) {
      this.appendToExpression(character);
    } else {};
  };

  removeFromExpression = () => {
    let expression = this.state.expression;
    expression = expression.slice(0,-1);
    this.setState({expression});
    this.setState({displayValue: expression});
  }

  appendToExpression = (character) => {
    let expression = this.state.expression;
    expression = expression.concat(character);
    this.setState({expression});
    this.setState({displayValue: expression});
  }

  clearScreen = () => {
    this.setState({expression:''});
    this.setState({displayValue:''});
  }

  evaluateExpression = () => {
    //evaluate is a MathJS library function that aleviates security concerns from standard eval;
    let answer = '';
    try {answer = evaluate(this.state.expression);
    } catch(error) {
      answer = null;
    }

    // Upgrade: remove the hard-coded in favor of a user-selected value.
    if (!answer || answer=='Infinity' || isNaN(answer)) {
      answer = 'Expression not valid';
    } else {
      answer = parseFloat(answer.toPrecision(5));
      let entry = `${this.state.expression} = ${answer}`;
      this.props.updateNotebookList(entry);
    };

    // Prints answer (or error message) to the calculator screen
    this.setState({displayValue: answer})

    //Resets the screen and numbers for next calculation
    this.setState({expression:''})
  }

  render() {
    return (
      <div className='calculator'>
        <header className='calculatorScreen'>
          {this.state.displayValue}
        </header>
        <div className='calculatorBody'>
          {Calculator.expressiveCharacters.slice(0,6).map(character => (
            <button className='calculatorButton red' onClick={() => this.handleCharacter(character)} key={character}>
              {character}
            </button>
          ))}
          {Calculator.expressiveCharacters.slice(6).map(character => (
            <button className='calculatorButton black' onClick={() => this.handleCharacter(character)} key={character}>
              {character}
            </button>
          ))}
        </div>
      </div>
    )
  }
}

export default Calculator