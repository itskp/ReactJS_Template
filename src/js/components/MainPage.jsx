import React from "react"

export default class MainPage extends React.Component {
    constructor(){
        super();
        this.state = {
            webname: "ReactJS",
            message: "hello world!",
            version: "0.0.1"
        };
    }

    render(){
        return (
            <div class="container">
              <div class="jumbotron">
                <h1>{this.state.webname} template</h1>
                <p> {this.state.message}</p>
                ver:{this.state.version}
              </div>
              <p>Do something</p>
            </div>
        );
    }
}
