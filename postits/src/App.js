import { render } from '@testing-library/react';
import React, { Component } from 'react';
import { Form } from './components/Form';
import { NoteList}  from './components/NoteList'

class App extends Component{

  constructor(){
    super();

    this.state = {
      postits: [],
    }
  }

  handleCreatPostit(title, description){
    const newPostit = {title, description}
    const newPostits = [...this.state.postits, newPostit];
    const newState = {
      postits: newPostits,
    }
    this.setState(newState)
  }
  
  render() {
    return (
      <>
        <Form handleCreatPostit={this.handleCreatPostit.bind(this)} />
        <NoteList postits={this.state.postits} /> 
      </>
      );
    }
  }
  
  export default App;
  