import React, {Component} from 'react';

class Mole extends Component{
  constructor(props){
    super(props);
    this.state = {
      clickNow: false,
      intervalID: '',
      change: false,
      pic: this.props.molo[Math.floor(Math.random() * this.props.molo.length)]
    }
    this.check = this.check.bind(this);
    this.score = this.score.bind(this);
  }

  componentDidMount(){
    let intervalId = setInterval( this.check, 1);
  }
  componentWillUnmount(){
    clearInterval(this.state.intervalId);
  }

check(){
  if(this.props.play){this.setState({change: true})};
  if(this.props.id === this.props.select){
    this.setState({clickNow: true});
    if(this.state.change){this.setState({pic: this.props.molo[Math.floor(Math.random() * this.props.molo.length)]});this.props.cancel(); this.setState({change:false})};
  }
  else {
    this.setState({clickNow: false});
    this.setState({pic: "https://wallpaperaccess.com/full/6104138.jpg"});
  }
}

score(){
  if(this.state.clickNow === true){
    this.props.add();
    console.log("good job");
    this.props.click();
    this.setState({change:true});
  }
  else{
    this.props.sub();
    console.log("no no");
    this.props.click();
  }
}

  render(){
    return(
        <button style={{backgroundImage: `url('https://wallpaperaccess.com/full/6104138.jpg')`}}>
        <img src={this.state.pic} style={{width: "200px",height:"200px"}} onClick={this.score}/>
        </button>
    )
  }

}

export default Mole;
