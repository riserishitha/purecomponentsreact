import {PureComponent } from "react";

class pure extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { 
        count: 0,
        toggle: false,
     };
  }
  increase = () => {
    if(this.state.toggle==true){
        this.setState({...this.state, count: this.state.count+1 })}
  }
  
  toggle =()=>{
    this.setState({...this.state, toggle:!(this.state.toggle) })
  }
  render() {
    return (
      <div>
        <h1>PureComponent Counter</h1>
        <h4>Count {this.state.count}</h4>
        <div>
            <button onClick={this.increase}>
              +
            </button>
            <button onClick={this.toggle}>Toggle</button>
          </div>
        </div>
    );
  }
}

export default pure;