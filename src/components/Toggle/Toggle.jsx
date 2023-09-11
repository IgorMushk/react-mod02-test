import React, { Component } from 'react'

export default class Toggle extends Component {
    state = { isOpen: false };

    // Вариант 1
    // show = () => this.setState({ isOpen: true });
  
    // hide = () => this.setState({ isOpen: false });
  
    // render() {
    //   const { isOpen } = this.state;
    //   const { children } = this.props;
  
    //   return (
    //     <>
    //       <button onClick={this.show}>Show</button>
    //       <button onClick={this.hide}>Hide</button>
    //       {isOpen && children}
    //     </>
    //   );
    //}

    // Вариант 2
    toggle = () => {
        this.setState(state => ({ isOpen: !state.isOpen }));
      };
    
      render() {
        const { isOpen } = this.state;
        const { children } = this.props;
    
        return (
          <div>
            <button onClick={this.toggle}>{isOpen ? "Hide" : "Show"}</button>
            {isOpen && children}
          </div>
        );
      }


}
