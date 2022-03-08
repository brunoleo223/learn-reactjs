import React, { Component } from 'react';
import "./style.css";

export class Postit extends Component {
    render() {
        return(
            <section className='postit'>
                <h3>Título</h3>
                <p>Descrição da nota</p>
            </section>
            )
        }
    }