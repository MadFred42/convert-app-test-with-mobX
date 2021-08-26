import React from 'react';
import CurrencyValueListItems from '../currencyValueListItems';
import ListHeader from '../listHeader';

const CurrencyValueList = () => {

    return (
        <div className='container' style={{margin: '40px auto'}}>
            <ListHeader />
            <CurrencyValueListItems /> 
            <span style={{margin: '20px', width: '100%', fontSize: '18px'}}>Стоимость валют за 1 (один) российский рубль*</span>
        </div>
        
    )
}

export default CurrencyValueList;