import { toJS } from 'mobx';
import { inject, observer } from 'mobx-react';
import React from 'react';

const CurrencyValueListItems = observer(({store}) => {
    const valutes = toJS(store.valute)
    
    return valutes.map(item => {
        const { Name, Value, ID, CharCode, Previous } = item;
        const difference = Value - Previous;
        let classLabel;
        
        if (difference < 0) {
            classLabel += 'list-group-item list-group-item-danger';
        } else if (difference > 0) {
            classLabel += 'list-group-item list-group-item-success';
        } else {
            return classLabel;
        }

        if (CharCode === 'RUB') {
            return null
        }

        return (
            <ul key={ID} className='row'>
                <li className='col list-group-item'>{Name}</li>
                <li className='col list-group-item'>{Value.toFixed(2)} руб</li>
                <li className='col list-group-item'>{Previous.toFixed(2)} руб</li>
                <li className={`col ${classLabel}`}>{difference.toFixed(2)} руб </li>
                <li className='col list-group-item'>{CharCode}</li>
            </ul>
        )
    }); 
})

export default inject('store')(CurrencyValueListItems)