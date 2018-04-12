import React from "react";
import "../stylesheets/Button.css"
import axios from 'axios'

/*
 This is amazing button which will show how many times
 it has been clicked
 */
class CounterButton extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            count : 1,
            post : "Initial Post"
        };
    }
    render() {
        return (
            <div>
                <button onClick={this.onButtonClicked} className={this.state.color}> Count {this.state.count}</button>
                <div>{this.state.post}</div>
            </div>

        );
    }

    onButtonClicked = () => {
        this.getLatestCount();
        console.log("count", this.state.count);
    }

    getLatestCount = () => {
        axios.get("https://jsonplaceholder.typicode.com/posts/"+this.state.count).then(response => {
            console.log("Response Received", response);
            this.setState((prevState) => ({
                post : response.data.title,
                count : prevState.count+1
            }))
        }).catch();



        console.log("count", this.state.count);
    }
}

export default CounterButton;