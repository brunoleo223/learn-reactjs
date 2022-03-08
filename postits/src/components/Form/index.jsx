import React, { Component } from 'react';
import "./style.css";

export class Form extends Component {

    constructor(){
        super();
        this.title = "";
    }

    handleChangeTitle(e){
        this.title = e.target.value;
        console.log(this.title)
    }

    render() {
        return(
            <form className='form'>
                <input 
                    type="text" 
                    placeholder="Título" 
                    onChange={this.handleChangeTitle.bind(this)}
                />
                <textarea placeholder="Escreve sua nota"></textarea>
                <button>Criar nota</button>
            </form>
            )
        }
    }