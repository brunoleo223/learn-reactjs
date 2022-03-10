import React, { Component } from 'react';
import "./style.css";

export class Postit extends Component {
    render() {
        return(
            <section className='postit'>
                <h3>{this.props.title}</h3>
                <p>{this.props.description}</p>
            </section>
            )
        }
    }