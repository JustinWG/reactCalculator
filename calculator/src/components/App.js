import React from 'react';
import PropTypes from 'prop-types';
import base from '../base';

import Notebook from './Notebook.js';
import Calculator from './Calculator.js';
import Header from './Header.js';

// ToDo: format all the quotes the same; double or single, Justin, pick one!

class App extends React.Component {
  state = {
    noteBookList: [],
  };

  static propTypes = {
    match: PropTypes.object,
  }

  componentDidMount() {
      const {params} = this.props.match;

      this.ref= base.syncState(`${params.roomId}/noteBookList`, {
        context: this,
        state: 'noteBookList',
        asArray: true,
      });
  }

  componentWillUnmount() {
    base.removeBinding(this.ref);
  }


  updateNotebookList = (entry) => {

    //1. Take a copy of State
    const noteBookList = [...this.state.noteBookList];
    //2. Either add to order or update the Quantity
    if (noteBookList.length === 10) {
      noteBookList.pop();}
    noteBookList.unshift(entry)
    //3. Push State
    this.setState({ noteBookList });
  };

  render () {
    return (
      <div className='container'>
        <Header roomId={this.props.match.params.roomId} />
        <Notebook noteBookList={this.state.noteBookList}/>
        <Calculator updateNotebookList={this.updateNotebookList}/>
      </div>
    )
  }
}

export default App;