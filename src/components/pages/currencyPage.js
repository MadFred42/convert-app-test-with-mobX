import React from 'react';
import { inject, observer } from 'mobx-react';
import { toJS } from 'mobx';

const ExchangePage = observer(({store}) => {

    function renderItems(obj) {
        
    }
    
    return (
        <div>Hello</div>
    )
});

export default inject('store')(ExchangePage);