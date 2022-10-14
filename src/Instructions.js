// Importing React will convert JSX.
import React, { Component } from "react";
import emoji from './emoji.svg';

export default class Instructions extends Component {
    render() {
        return (
            <div className="instructions">
                <img className="logo" alt="laughing emoji" src={emoji} />
                <p>
                    Click on an emoji to view it's short name.
                </p>
            </div>
        );
    }
}