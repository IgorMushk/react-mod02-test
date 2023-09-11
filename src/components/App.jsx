import React, { Component } from 'react'
import Counter from "./Counter/Counter";
import Toggle from "./Toggle/Toggle";
import { Button } from './Button/Button';
import LoginForm from './LoginForm/LoginForm';
import SignUpForm from './SignUpForm/SignUpForm';
import SignUpFormV2 from './SignUpFormV2/SignUpFormV2';
import FormId from './FormId/FormId';
import SignUpFormCheckbox from './SignUpFormСheckbox/SignUpFormСheckbox';
import SignUpFormCheckboxRB from './SignUpFormСheckboxRB/SignUpFormСheckboxRB';
import SignUpFormCheckboxRBSelect from './SignUpFormСheckboxRBSelect/SignUpFormСheckboxRBSelect';


//export const App = () => {
export class App extends Component {
  state = {
    message: new Date().toLocaleTimeString(),
    inputValue: "",
  };

  // Метод который будем передавать в Button для вызова при клике
  updateMessage = evt => {
    console.log(evt); // Доступен объект события
    this.setState({
      message: new Date().toLocaleTimeString(),
    });
  };

  handleChangeInputValue = evt => {
    this.setState({ inputValue: evt.target.value });
    console.log(evt.target.value);
  };

  render() {
    //const { inputValue } = this.state;
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 28,
        color: '#010101',
        flexDirection: "column",
      }}
    >
      {/* React homework template! */}
      <p>------------------------------------</p>
      <div>
      <Counter/>
      </div>
      <p>------------------------------------</p>
      <div>
      <Toggle>
        <p>Hello!</p>
      </Toggle>
      </div>
      <p>------------------------------------</p>
      <div>
        <span>{this.state.message}</span>
        <Button label="Change message" changeMessage={this.updateMessage} />
      </div>
      <p>------------------------------------</p>
      <div>
      <LoginForm onSubmit={values => console.log(values)} />
      </div>
      <p>------------------------------------</p>
      <div>
      <input type="text" value={ this.state.inputValue} onChange={this.handleChangeInputValue} />
      </div>
      <p>------------------------------------</p>
      <div>
        <SignUpForm onSubmit={values => console.log('App - SignUpForm',values)}/>
      </div>
      <p>------------------------------------</p>
      <div>
        <SignUpFormV2 onSubmit={values => console.log('App - SignUpForm',values)}/>
      </div>
      <p>------------------------------------</p>
      <div>
        <FormId/>
      </div>
      <p>------------------------------------</p>
      <div>
        <SignUpFormCheckbox onSubmit={values => console.log('App - SignUpForm',values)}/>
      </div>
      <p>------------------------------------</p>
      <div>
        <SignUpFormCheckboxRB onSubmit={values => console.log('App - SignUpForm',values)}/>
      </div>
      <p>------------------------------------</p>
      <SignUpFormCheckboxRBSelect onSubmit={values => console.log('App - SignUpForm',values)}/>
    </div>
  );
}
};
