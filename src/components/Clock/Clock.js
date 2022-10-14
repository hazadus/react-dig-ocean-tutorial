import 'bootstrap/dist/css/bootstrap.css';
import Badge from 'react-bootstrap/Badge';
import React from 'react';

export default class Clock extends React.Component {
    constructor(properties) {
      super(properties);
      this.state  = {
        date: new Date()
      };
      // Bootstrap style for Badge should be passed as a parameter
      // to Clock constructor!
      this.styling = properties.styling;
      console.log(properties.styling)
    }
  
    // So called "Lifecycle Methods":
    // Called whenever Clock is rendered to the DOM for the first time
    componentDidMount() {
      this.timerID = setInterval(
        () => this.tick(),
        1000
      );
    }
  
    // Called when Clock is removed from DOM
    componentWillUnmount() {
      clearInterval(this.timerID);
    }
  
    // Update the time object
    tick() {
      this.setState({
        date: new Date(),
      });
    }
  
    render() {
      return (
        <Badge bg={this.styling}>{this.state.date.toLocaleTimeString()}</Badge>
      );
    }
  }