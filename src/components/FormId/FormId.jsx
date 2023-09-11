import { nanoid } from 'nanoid';
import React, { Component } from 'react'

export default class FormId extends Component {
    loginInputId = nanoid();

    render() {
      return (
        <form>
          <label htmlFor={this.loginInputId}>Login</label>
          <input type="text" name="login" id={this.loginInputId} />
        </form>
      );
    }
}
