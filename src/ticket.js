import React from 'react';

export default class Ticket extends React.Component{
 
 constructor(){
        super();
        this.state ={bet:'1'};
        
    }
getInputValue(e){  
     if (this.state.bet !== null) { 
        this.setState({
         bet: e.target.value
        });
        return(this.state.bet);
    }
    }
getMatchCount(){
    if(this.props.coupon !== null){
        var matchCount = this.props.coupon.length;
        return matchCount ;
         
    }
}
getMaxOdd(){
     if(this.props.coupon !== null){
         var odd = this.props.coupon.map((odd, index) =>
            odd.odd
         );
        var sum = 1;
            for (var i=0; i<odd.length; i++) {
                sum = sum * odd[i];
            } 
            return sum.toFixed(2);
     }
}
getMaxWin(){
    return(this.getMaxOdd() * this.state.bet).toFixed(2);
}


    

    render(){  

        const couponItems = this.props.coupon.map((odd, index) =>
            <div className="oddDetails" key={'couponOds' + index}>
                <div className="betTitle">
                    <span>{odd.matchId}</span> 
                    <span>{odd.homeTeam} - {odd.awayTeam}</span>
                </div>
                <div className="betDetails">
                    <span>{odd.market}</span> 
                    <span>{odd.name}</span>
                    <span>{odd.odd}</span> 
                </div>  
            </div> 
        );
        const couponBet = <div className="bet">
                    <div className="betInput">
                         <span>Tutar</span>
                         <input type="text" value={this.state.bet} onChange={this.getInputValue.bind(this)}/>
                    </div>

                    <div className="betInput">
                        <span>Maç Sayısı</span>
                        <input type="text" value={this.getMatchCount()} disabled/>
                    </div>

                     <div className="betInput">
                        <span>Maks. Oran</span>
                        <input type="text" value={this.getMaxOdd()} disabled/>
                    </div>
                    
                     <div className="betInput">
                        <span>Maks. Kazanç</span>
                        <input type="text" value={this.getMaxWin()} disabled/>
                    </div>
                     
                </div>
               

        
        return(
            <div className="ticket">
                <h1>KUPON</h1>
                {couponItems}
                {couponBet}
                
            </div>

            
        )
    }


}