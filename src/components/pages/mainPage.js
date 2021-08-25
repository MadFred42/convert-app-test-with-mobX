import React, { useEffect, useState } from 'react';
import { inject, observer } from 'mobx-react';
import { toJS } from 'mobx';


const MainPage = observer(({store}) => {
    
    useEffect(() => {
        store.fetchData();  
    }, [store.valute]);
    console.log(toJS(store.valute));

    return (
        <div className='card d-block'>  
        <div className='input-group' style={{margin: '30px'}}>
            <input className='form-control' onChange={store.getValue}></input>
            <div className="input-group-append">
                <span className="input-group-text h-100 text-center" style={{width: '250px'}}>{store.currency}</span>
            </div>
        </div>
        </div>
    )
});

export default inject("store")(MainPage);