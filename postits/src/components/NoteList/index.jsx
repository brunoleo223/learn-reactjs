import React, { Component } from "react";
import { Postit } from "../Postit";
import "./style.css";

export class NoteList extends Component{
    render (){
        return (
            <ul className="note-list">
                {this.props.postits.map((item, index) => {
                    return (
                        <li key={index}>
                            <Postit
                                index = {index}
                                handleDeletePostit = {this.props.handleDeletePostit}
                                title={item.title} 
                                description={item.description} 
                            />
                        </li>
                    )
                })}
            </ul>
        )
    }
}