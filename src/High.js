import React, {Component} from 'react';

class High extends Component{
  constructor(props){
    super(props);
    this.state ={
      list: [],
      intervalID: ""
    }
    this.add = this.add.bind(this);
  }

  componentDidMount(){
    let intervalId = setInterval( this.add, 100);
  }
  componentWillUnmount(){
    clearInterval(this.state.intervalId);
  }

  add(){
    if(this.props.state){
      let x = this.state.list;
      x.push(this.props.score);
      this.setState({list: x});
      this.props.done();
    }
  }

  render(){
    return(
      <body style={{color:"red", backgroundColor: "black"}}>High Scores
      <ul>
      {this.state.list.map((v)=> <div>
              Score: {v}
              </div>)}
      </ul>
      </body>
    )
  }
}

export default High;
