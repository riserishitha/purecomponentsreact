import { Component } from "react";

class normal extends Component {
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
    console.log("This is regular component.")
    return (
      <div>
        <h1>Regular Counter</h1>
       <h4>
       Count {this.state.count}
        </h4> 
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

export default normal;
