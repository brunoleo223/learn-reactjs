import React, { Component } from "react";
import { Postit } from "../Postit";
import "./style.css";

export class NoteList extends Component{
    render (){
        return (
            <ul className="note-list">
                {Array.of("Trabalho", "Trabalho", "Estudos").map((item, index) => {
                    return (
                        <li key={index}>
                            <Postit />
                        </li>
                    )
                })}
            </ul>
        )
    }
}