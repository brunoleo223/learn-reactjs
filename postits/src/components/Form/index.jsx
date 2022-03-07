import React, { Component } from 'react';

export class Form extends Component {
    render() {
        return(
            <form>
            <input type="text" placeholder="Título" />
            <textarea placeholder="Escreve sua nota"></textarea>
            <button>Criar nota</button>
            </form>
            )
        }
    }