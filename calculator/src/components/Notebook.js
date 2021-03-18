import React from 'react';

class Notebook extends React.Component {

  render() {
    return(
        <div className='paper'>
          <div className='paperPattern'>
            <div className='paperContent'>
                Results:
                <div id='results'></div>
                    {this.props.noteBookList.map((element, index) => (
                    <li key={index}>{element}</li>
                    ))
                  }
                <br/>
                See everyone’s math problems as they’re solved on this site!
                <br/>
                <br/>
                Check out the
                <a href='https://github.com/JustinWG/simple-math-with-friends' target='_blank' rel='noopener noreferrer'> github repo </a>
            </div>
          </div>
        </div>
    )
  }
}

export default Notebook;