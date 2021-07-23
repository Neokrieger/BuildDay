import React, {Component} from 'react';

class Title extends Component{

  render(){
    const mystyle = {
      color: "white",

      padding: "40px",
      fontFamily: "Arial",
      textAlign: "center",
      fontSize: "50px"
    };
    const bk = {
      backgroundColor: "blue"
    }
    const bs = {
      width:"50px",
      height:"50px"
    }

    return(
      <body style={bk}><div style={mystyle}>Whack a Mole</div></body>
    )
  }

}




export default Title;
