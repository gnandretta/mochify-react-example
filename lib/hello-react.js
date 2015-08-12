import React from 'react';
import Immutable from 'immutable';

export default class HelloReact extends React.Component {
 constructor(props) {
   super(props);
   this.state = {sayHello: false};
 }

 render() {
   let helloReact;

   if (this.state.sayHello) {
     helloReact = <div className="message">Hello {this.props.name}</div>;
   }

   return (
     <div className="hello-react">
       <button onClick={this._sayHello.bind(this)}>Say Hello</button>
       {helloReact}
     </div>
   );
 }

 _sayHello() {
   this.setState({
     sayHello: true
   });
 }
}

HelloReact.propTypes = {
  name: React.PropTypes.string.isRequired
};
