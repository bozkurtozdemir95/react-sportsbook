import React from 'react';
import Event from './event.js';

export default class Matches extends React.Component{

    render(){     
        return(
            <div className="matches">
                <Event coupon={this.props.coupon}/>
            </div>
        )
    }
}

