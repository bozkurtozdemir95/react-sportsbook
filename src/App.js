import React, { Component } from 'react';
import './App.css';
import Event from './event.js';
import Ticket from './ticket.js';
import Header from './header.js';




class App extends Component {

    constructor(){
        super();
        this.state = {coupon:[]};
        
    }

    addMatch(odd){
      if(this.oddIsExist(odd.oddId)){
        return false;
      }

       this.setState({coupon: [...this.state.coupon, odd]});
      }


      removeMatch(oddId){
        this.setState({coupon: this.state.coupon.filter(function(odd){ return oddId !== odd.oddId})})
      }


      oddIsExist(id){
        return this.state.coupon.some(function(odd){
        return odd.oddId === id;
        });
      }
      


  render() {
    return (
     <div className="main">
        <Header />
          <div className="content">
          <Event coupon={this.state.coupon} addMatch={this.addMatch.bind(this)} oddIsExist={this.oddIsExist.bind(this)} removeMatch={this.removeMatch.bind(this)} />
          <Ticket coupon={this.state.coupon}/>
       </div>
     </div>
    );

    
  }
}

export default App;
