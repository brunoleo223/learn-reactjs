import React, { Component } from 'react';
import "./style.css";
import {ReactComponent as DeleteIcon} from '../../assets/img/delete.svg'

export class Postit extends Component {

    delete(){
        const index = this.props.index;
        this.props.handleDeletePostit(index);
    }

    render() {
        return(
            <section className='postit'>
                <DeleteIcon onClick={this.delete.bind(this)} />
                <h3>{this.props.title}</h3>
                <p>{this.props.description}</p>
            </section>
            )
        }
    }