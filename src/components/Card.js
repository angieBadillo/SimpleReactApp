import {Component} from "react";
import React from "react";
import '../stylesheets/Card.css'

class Card extends Component {
    render() {
        return (
            <div className="card">
                <img className="image" src={this.props.image}></img>
                <div className="title">{this.props.title}</div>
                <div className="subTitle">{this.props.subTitle}</div>

            </div>
        )
    }
}

export default Card;