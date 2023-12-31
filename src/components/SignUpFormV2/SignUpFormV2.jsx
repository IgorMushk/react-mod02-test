import React, { Component } from 'react'

// Выносим объект с примитивами в константу чтобы было удобно сбрасывать.
// Нельзя использовать если в каком-то свойстве состояния хранится сложный тип.
const INITIAL_STATE = {
  login: "",
  email: "",
  password: "",
};


export default class SignUpFormV2 extends Component {
    state = { ...INITIAL_STATE };

    // Для всех инпутов создаем один обработчик
    // Различать инпуты будем по атрибуту name
    handleChange = evt => {
      const { name, value } = evt.target;
      this.setState({ [name]: value });
    };
  
    handleSubmit = evt => {
      evt.preventDefault();
      const { login, email, password } = this.state;
      console.log(`Login: ${login}, Email: ${email}, Password: ${password}`);
      this.props.onSubmit({ ...this.state });
      this.reset();
    };
  
    reset = () => {
      this.setState({ ...INITIAL_STATE });
    };
  
    render() {
      const { login, email, password } = this.state;
  
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Name
            <input
              type="text"
              placeholder="Enter login"
              name="login"
              value={login}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Email
            <input
              type="email"
              placeholder="Enter email"
              name="email"
              value={email}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Password
            <input
              type="password"
              placeholder="Enter password"
              name="password"
              value={password}
              onChange={this.handleChange}
            />
          </label>
  
          <button type="submit">Sign up as {login}</button>
        </form>
      );
    }
}
