import React, { Component } from 'react'
import Counter from "./Counter/Counter";
import Toggle from "./Toggle/Toggle";
import { Button } from './Button/Button';


//export const App = () => {
export class App extends Component {
  state = {
    message: new Date().toLocaleTimeString(),
  };

  // Метод который будем передавать в Button для вызова при клике
  updateMessage = evt => {
    console.log(evt); // Доступен объект события
    this.setState({
      message: new Date().toLocaleTimeString(),
    });
  };

  render() {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        flexDirection: "column",
      }}
    >
      {/* React homework template! */}
      <div>
      <Counter/>
      </div>
      <div>
      <Toggle>
        <p>Hello!</p>
      </Toggle>
      </div>
      <div>
        <span>{this.state.message}</span>
        <Button label="Change message" changeMessage={this.updateMessage} />
      </div>
    </div>
  );
}
};
