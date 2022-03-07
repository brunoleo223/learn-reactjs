import React, { Component } from "react";
import { Postit } from "../Postit";

export class NoteList extends Component{
    render (){
        return (
            <ul>
                {Array.of("Trabalho", "Trabalho", "Estudos").map(item => {
                    return (
                        <li>
                            <Postit />
                            <div>{item}</div>
                        </li>
                    )
                })}
            </ul>
        )
    }
}