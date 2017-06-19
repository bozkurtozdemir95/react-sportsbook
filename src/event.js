import React from 'react';

export default class Event extends React.Component{
   
      oddClick(odd){
          if(this.props.oddIsExist(odd.oddId)){
            this.props.removeMatch(odd.oddId);
          }else {
            this.props.addMatch(odd);
          }
      }

      render(){    

      var items = [  
    { 
  			  	matchId: "521", 
  			  	homeTeam: "Tom Tomsk", 
  			  	awayTeam: "Krylya Sovetov",
                markets: [
                  {
                    name: '1x2',
                    id: 52111,
                    odds: [
                      {id: 52112, name: '1', odd: 1.35},
                      {id: 52113, name: 'x', odd: 2.15},
                      {id: 52114, name: '2', odd: 4.55}
                    ]
                  },
                  {
                    name: 'Alt/Üst',
                    id: 52115, 
                    odds: [
                      {id: 52116, name: 'Alt', odd: 1.35},
                      {id: 52117, name: 'Üst', odd: 4.25}
                    ]
                  },
              {
                    name: 'Çifte Şans',
                    id: 52118, 
                    odds: [
                      {id: 52119, name: '1/X', odd: 1.35},
                      {id: 52120, name: '1/2', odd: 1.55},
                      {id: 52121, name: '2/X', odd: 4.75}
                    ]
                } 
		  ]
		},

    { 
  				  matchId: "522",  
  			  	homeTeam: "Fenerbahçe", 
  			  	awayTeam: "Galatasaray",
                markets: [
                  {
                    name: '1x2',
                    id: 52211, 
                    odds: [
                      {id: 52212, name: '1', odd: 1.65},
                      {id: 52213, name: 'x', odd: 2.15},
                      {id: 52214, name: '2', odd: 4.15}
                    ]
                  },
                  {
                    name: 'Alt/Üst',
                    id: 52215, 
                    odds: [
                      {id: 52216, name: 'Alt', odd: 1.86},
                      {id: 52217, name: 'Üst', odd: 2.55}
                    ]
                  },
              {
                    name: 'Çifte Şans',
                    id: 52218, 
                    odds: [
                      {id: 52219, name: '1/X', odd: 1.65},
                      {id: 52220, name: '1/2', odd: 1.82},
                      {id: 52221, name: '2/X', odd: 2.15}
                    ]
                } 
		  ]
		},
    
    { 
  				  matchId: "523",  
  			  	homeTeam: "Arsenal", 
  			  	awayTeam: "Chelsea",
                markets: [
                  {
                    name: '1x2',
                    id: 52311, 
                    odds: [
                      {id: 52312, name: '1', odd: 2.85},
                      {id: 52313, name: 'x', odd: 3.35},
                      {id: 52314, name: '2', odd: 1.65}
                    ]
                  },
                  {
                    name: 'Alt/Üst',
                    id: 52315, 
                    odds: [
                      {id: 52316, name: 'Alt', odd: 1.36},
                      {id: 52317, name: 'Üst', odd: 1.95}
                    ]
                  },
              {
                    name: 'Çifte Şans',
                    id: 52318, 
                    odds: [
                      {id: 52319, name: '1/X', odd: 2.15},
                      {id: 52320, name: '1/2', odd: 1.95},
                      {id: 52321, name: '2/X', odd: 1.45}
                    ]
                } 
		  ]
		},
    
    { 
  				  matchId: "524",  
  			  	homeTeam: "Real Madrid", 
  			  	awayTeam: "Barcelona",
                markets: [
                  {
                    name: '1x2',
                    id: 52411, 
                    odds: [
                      {id: 52412, name: '1', odd: 1.85},
                      {id: 52413, name: 'x', odd: 2.35},
                      {id: 52414, name: '2', odd: 4.65}
                    ]
                  },
                  {
                    name: 'Alt/Üst',
                    id: 52415, 
                    odds: [
                      {id: 52416, name: 'Alt', odd: 1.56},
                      {id: 52417, name: 'Üst', odd: 1.75}
                    ]
                  },
              {
                    name: 'Çifte Şans',
                    id: 52418, 
                    odds: [
                      {id: 52419, name: '1/X', odd: 1.35},
                      {id: 52420, name: '1/2', odd: 1.85},
                      {id: 52421, name: '2/X', odd: 2.55}
                    ]
                } 
		  ]
		},

    { 
  				  matchId: "525",  
  			  	homeTeam: "Paris St Germain", 
  			  	awayTeam: "Monaco",
                markets: [
                  {
                    name: '1x2',
                    id: 52511, 
                    odds: [
                      {id: 52512, name: '1', odd: 2.15},
                      {id: 52513, name: 'x', odd: 3.55},
                      {id: 52514, name: '2', odd: 2.35}
                    ]
                  },
                  {
                    name: 'Alt/Üst',
                    id: 52515, 
                    odds: [
                      {id: 52516, name: 'Alt', odd: 1.45},
                      {id: 52517, name: 'Üst', odd: 1.85}
                    ]
                  },
              {
                    name: 'Çifte Şans',
                    id: 52518, 
                    odds: [
                      {id: 52519, name: '1/X', odd: 1.55},
                      {id: 52520, name: '1/2', odd: 1.75},
                      {id: 52521, name: '2/X', odd: 1.95}
                    ]
                } 
		  ]
		},

    { 
  				  matchId: "526",  
  			  	homeTeam: "Juventus", 
  			  	awayTeam: "Sampdoria",
                markets: [
                  {
                    name: '1x2',
                    id: 52611, 
                    odds: [
                      {id: 52612, name: '1', odd: 1.05},
                      {id: 52613, name: 'x', odd: 2.85},
                      {id: 52614, name: '2', odd: 8.51}
                    ]
                  },
                  {
                    name: 'Alt/Üst',
                    id: 52615, 
                    odds: [
                      {id: 52616, name: 'Alt', odd: 1.25},
                      {id: 52617, name: 'Üst', odd: 2.15}
                    ]
                  },
              {
                    name: 'Çifte Şans',
                    id: 52618, 
                    odds: [
                      {id: 52619, name: '1/X', odd: 1.05},
                      {id: 52620, name: '1/2', odd: 1.15},
                      {id: 52621, name: '2/X', odd: 6.61}
                    ]
                } 
		  ]
		},
    { 
  			  	matchId: "527", 
  			  	homeTeam: "Bayern Munih", 
  			  	awayTeam: "Schalke",
                markets: [
                  {
                    name: '1x2',
                    id: 52711,
                    odds: [
                      {id: 52712, name: '1', odd: 1.35},
                      {id: 52713, name: 'x', odd: 2.15},
                      {id: 52714, name: '2', odd: 4.55}
                    ]
                  },
                  {
                    name: 'Alt/Üst',
                    id: 52715, 
                    odds: [
                      {id: 52716, name: 'Alt', odd: 1.35},
                      {id: 52717, name: 'Üst', odd: 4.25}
                    ]
                  },
              {
                    name: 'Çifte Şans',
                    id: 52718, 
                    odds: [
                      {id: 52719, name: '1/X', odd: 1.35},
                      {id: 52720, name: '1/2', odd: 1.55},
                      {id: 52721, name: '2/X', odd: 4.75}
                    ]
                } 
		  ]
		},
    
];


  		
const listItems = items.map((event) =>
  <div className="match" key={event.matchId}>
      <span>{event.matchId}</span>
      <span>{event.homeTeam + ' - ' + event.awayTeam}</span>
      {event.markets.map(market =>
       <span key={market.name} style={{border: "1px solid #FFAB00"}}>{market.odds.map(odd =>
         <div key={odd.odd} className="oddBox"> <span className={"odd " + (this.props.oddIsExist(odd.id) ? "active" : "")} onClick={this.oddClick.bind(this,
           {marketId: market.id,
            oddId: odd.id,
            name: odd.name, 
            odd: odd.odd, 
            market: market.name,
            homeTeam: event.homeTeam, 
            awayTeam: event.awayTeam, 
            matchId: event.matchId})}
             
            style={{border: "none"}}>{odd.odd}</span></div>)}
      </span>)}
 </div>
);

        return( 

        <div className="matchTable">
            <div className="title">
              <span>ID</span>
              <span>Takımlar</span>
              <span>1 - 0 - 2</span>
              <span>Alt / Üst</span>
              <span className="double"><label>Cifte Sans</label> 1/X - 1/2 - 2/X</span>
            </div>
            {listItems}            
        </div>
        )
    }
   
}




