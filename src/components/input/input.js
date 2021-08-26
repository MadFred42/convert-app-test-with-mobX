import { inject, observer } from 'mobx-react';
import React from 'react';

const Input = observer(({store}) => {
    

    return (
        <>
            <div className='input-group' style={{margin: '30px'}}>
                <input className='form-control' onChange={store.getValue}></input>
                <div className="input-group-append">
                    <span className="input-group-text h-100 text-center" style={{width: '250px'}}>{store.currency}</span>
                </div>
            </div>
            <span style={{margin: '0 30px', fontSize: '23px'}}>Example: 42 eur to rub</span>
        </>
    )
});

export default inject('store')(Input);