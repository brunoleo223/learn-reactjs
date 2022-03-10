import React, { Component } from 'react';
import "./style.css";

export class Form extends Component {

    constructor(props){
        super(props);
        this.title = "";
        this.description = "";
    }

    _handleChangeTitle(e){
        e.stopPropagation();
        this.title = e.target.value;
        console.log(this.title)
    }

    _handleTextArea(e){
        this.description = e.target.value;
        e.stopPropagation();
        console.log(this.description)
    }

    _createPostit(e){
        e.preventDefault()
        e.stopPropagation();

        this.props.handleCreatPostit(this.title, this.description);
    }

    render() {
        return(
            <form className='form' onSubmit={this._createPostit.bind(this)}>
                <input 
                    type="text" 
                    placeholder="Título" 
                    onChange={this._handleChangeTitle.bind(this)}
                />
                <textarea
                    placeholder="Escreve sua nota"
                    onChange={this._handleTextArea.bind(this)}
                ></textarea>
                <button>Criar nota</button>
            </form>
            )
        }
    }