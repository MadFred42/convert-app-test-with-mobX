import React from 'react';

export const ListHeader = () => {

    return (
        <ul className='row'>
            <li className='col list-group-item'><h5>Наименование валюты</h5></li>
            <li className='col list-group-item'><h5>Актуальное*</h5></li>
            <li className='col list-group-item'><h5>Вчера*</h5></li>
            <li className='col list-group-item'><h5>Разница</h5></li>
            <li className='col list-group-item'><h5>Код валюты</h5></li>
        </ul>
    )
}