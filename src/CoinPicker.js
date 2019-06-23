import React from 'react';
import './CoinPicker.css';

const CoinPicker = (props)=>(
	<div className='CoinPicker'>
		<label>
			From Coin
			<select value={props.fromCoin} onChange={props.setFromCoin}>
        		<option value=''>Select From Coin</option>
        		<option value='USD'>USD</option>
        		<option value='EUR'>EUR</option>
        		<option value='BTC'>BTC</option>
        		<option value='ETH'>ETH</option>
        		<option value='WINGS'>WINGS</option>
      		</select>
    	</label>

    	<label>
     		 To Coin
      		<select value={props.toCoin} onChange={props.setToCoin}>
        		<option value=''>Select To Coin</option>
        		<option value='USD'>USD</option>
        		<option value='EUR'>EUR</option>
       			<option value='BTC'>BTC</option>
        		<option value='ETH'>ETH</option>
        		<option value='WINGS'>WINGS</option>
      		</select>
    	</label>
    </div>
);

export default CoinPicker;