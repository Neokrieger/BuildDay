import React, {Component} from 'react';
import Mole from './Mole.js'
import High from './High.js'

class Game extends Component{
  constructor(props){
    super(props);
    this.state = {
      timer : 60,
      play: false,
      done: false,
      intervalID:'',
      select:'0',
      score: 0,
      molo: [],
      user: ["Neokrieger","lottiejj","Deerangan","breeshidy",
              "Reginmaru","richardtully", "RyanVanDijck", "AamirahV",
              "rawdah123","benclayton98","grantwhiteman","OllieVanD",
              "bferenczy0","b7rch4","FractalFraction","thekosiguy",
              "themegatree"]
    }
    this.countDown = this.countDown.bind(this);
    this.startCountDown = this.startCountDown.bind(this);
    this.selection = this.selection.bind(this);
    this.add = this.add.bind(this);
    this.sub = this.sub.bind(this);
    this.clicked = this.clicked.bind(this);
    this.cancel = this.cancel.bind(this);
    this.done = this.done.bind(this);
  }

  componentDidMount(){
    let x = [];
    x.push('https://upload.wikimedia.org/wikipedia/commons/2/25/Red.svg');
    for(let i = 0; i < this.state.user.length; i++){
    let link = "https://api.github.com/users/" + this.state.user[i];
    fetch(link)
    .then(res => res.json())
    .then(
      (result) =>{
        x.push(result.avatar_url);
        console.log(result.avatar_url);
      }
    )
    this.setState({molo: x });
  }
  }
  componentWillUnmount(){
    //clearInterval(this.state.intervalId);
  }

  startCountDown(){
    this.setState({timer: 60, score: 0, play:true});
    clearInterval(this.state.intervalId);
    //this.setState({score: 0});

    let intervalId = setInterval( this.countDown, 1000);

    this.setState({intervalId: intervalId});
  }

  countDown(){
    this.setState({timer: this.state.timer - 1});
    this.selection();
    if(this.state.timer <= 0){
      clearInterval(this.state.intervalId);
      this.setState({select: '0'});
      this.setState({play: false});
      this.setState({done: true});
    }
  }

  cancel(){
    this.setState({play: false});
  }

  selection(){
      let x = Math.random();
      if(x < 0.11)this.setState({select: '1'});
      else if(x < 0.22)this.setState({select: '2'});
      else if(x < 0.33)this.setState({select: '3'});
      else if(x < 0.44)this.setState({select: '4'});
      else if(x < 0.55)this.setState({select: '5'});
      else if(x < 0.66)this.setState({select: '6'});
      else if(x < 0.77)this.setState({select: '7'});
      else if(x < 0.88)this.setState({select: '8'});
      else if(x < 1)this.setState({select: '9'});
  }
  add(){
    this.setState({score: this.state.score + 50});
  }
  sub(){
    this.setState({score: this.state.score - 50});
  }
  clicked(){
    this.setState({select: '0'});
  }
  done(){
    this.setState({done: false});
  }

  render(){
    return(
      <body style={{textAlign: "center",backgroundImage: `url('https://wallpaperaccess.com/full/6104138.jpg')`}}>

      <div style={{color:"red", backgroundColor: "black"}}>{this.state.timer}</div>
      <button onClick={this.startCountDown}>START</button>

      <p>
      <p>
      <Mole id="1" cancel={this.cancel} select={this.state.select} add={this.add} sub={this.sub} click={this.clicked} molo={this.state.molo} play={this.state.play}/>
      <Mole id="2" cancel={this.cancel} select={this.state.select} add={this.add} sub={this.sub} click={this.clicked} molo={this.state.molo} play={this.state.play}/>
      <Mole id="3" cancel={this.cancel} select={this.state.select} add={this.add} sub={this.sub} click={this.clicked} molo={this.state.molo} play={this.state.play}/>
      </p>
      <p>
      <Mole id="4" cancel={this.cancel} select={this.state.select} add={this.add} sub={this.sub} click={this.clicked} molo={this.state.molo} play={this.state.play}/>
      <Mole id="5" cancel={this.cancel} select={this.state.select} add={this.add} sub={this.sub} click={this.clicked} molo={this.state.molo} play={this.state.play}/>
      <Mole id="6" cancel={this.cancel} select={this.state.select} add={this.add} sub={this.sub} click={this.clicked} molo={this.state.molo} play={this.state.play}/>
      </p>
      <p>
      <Mole id="7" cancel={this.cancel} select={this.state.select} add={this.add} sub={this.sub} click={this.clicked} molo={this.state.molo} play={this.state.play}/>
      <Mole id="8" cancel={this.cancel} select={this.state.select} add={this.add} sub={this.sub} click={this.clicked} molo={this.state.molo} play={this.state.play}/>
      <Mole id="9" cancel={this.cancel} select={this.state.select} add={this.add} sub={this.sub} click={this.clicked} molo={this.state.molo} play={this.state.play}/>
      </p>
      </p>
      <p style={{color:"red", backgroundColor: "black"}}>
      Current Score: {this.state.score}
      </p>
      <High score={this.state.score}done={this.done} state={this.state.done}/>
      </body>


    )
  }

}

export default Game;
