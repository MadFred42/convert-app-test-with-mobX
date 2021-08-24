import { toJS } from 'mobx';
import { inject, observer } from 'mobx-react';
import React, { useEffect, useState } from 'react';

const MainPage = observer(({store}) => {
    
    useState(() => {
        store.fetchData();  
    }, [store.valute]);
    console.log(toJS(store.valute));
    return (
        <>
            <input className='input-group' onChange={store.getValue}></input>
            <div>{store.currency}</div>
        </>
    )
});

export default inject("store")(MainPage);