import {Component} from "react";
import React from "react";
import Card from "./Card";
import  "../stylesheets/CardList.css"

class CardList extends Component {
    render() {
        return (
            <div className="cardList">
                <Card title="First Card" subTitle="This is first Card" image="http://via.placeholder.com/350x150"></Card>
                <Card title="Second Card" subTitle="This is second Card" image="http://via.placeholder.com/350x150"></Card>
                <Card title="Third Card" subTitle="This is third Card" image="http://via.placeholder.com/350x150"></Card>
            </div>
        )
    }
}

export default CardList;