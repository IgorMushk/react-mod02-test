import React, { Component } from 'react';

export default class Counter extends Component {
  // static defaultProps = {
  //     step: 1,
  //   };

  static defaultProps = {
    step: 1,
    initialValue: 0,
  };

  state = {
    value: this.props.initialValue,
  };

  // // Вариант 2
  //   constructor() {
  //     super();
  //     this.handleIncrement = this.handleIncrement.bind(this);
  //     this.handleDecrement = this.handleDecrement.bind(this);
  //   }

  // // Вариант  1 - 2
  //   handleIncrement(evt) {
  //     console.log("Increment button was clicked!", evt); // работает
  //     console.log("this.props: ", this.props); // Error: cannot read props of undefined
  //   }

  //   handleDecrement(evt) {
  //     console.log("Decrement button was clicked!", evt); // работает
  //     console.log("this.props: ", this.props); // Error: cannot read props of undefined
  //   }
  // //

  // Вариан -3
//   handleIncrement = evt => {
//     console.log('Increment button was clicked!', evt); // работает
//     console.log('this.props: ', this.props); // работает
//   };

//   handleDecrement = evt => {
//     console.log('Decrement button was clicked!', evt); // работает
//     console.log('this.props: ', this.props); // работает
//   };

  // Error !
  handleIncrement = () => {
      this.setState((state, props) => ({
        value: state.value + props.step,
      }));
    };

    handleDecrement = () => {
      this.setState((state, props) => ({
        value: state.value - props.step,
      }));
    };

  // Вариант 1
  //   render() {
  //     const { step } = this.props;

  //     return (
  //       <div>
  //         <span>0</span>
  //         <button type="button" onClick={this.handleIncrement.bind(this)}>
  //           Increment by {step}
  //         </button>
  //         <button type="button" onClick={this.handleDecrement.bind(this)}>
  //           Decrement by {step}
  //         </button>
  //       </div>
  //     );
  //   }

  // Вариант 2 - 3
  render() {
    const { step } = this.props;

    return (
      <div>
        <span>0</span>
        <button type="button" onClick={this.handleIncrement}>
          Increment by {step}
        </button>
        <button type="button" onClick={this.handleDecrement}>
          Decrement by {step}
        </button>
      </div>
    );
  }
}
