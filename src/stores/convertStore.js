import { action, makeObservable, observable } from 'mobx';
import CurrencyService from '../serivce/convertCurrencyServ';

export default class ConvertStore {
    currencyService = new CurrencyService();
    value = '';
    valute = '';

    getValue(e) {
        const currency = this.valute;
        this.value = e.target.value * currency;
    }

    fetchData() {
        this.currencyService.getResourses()
            .then(item => {
                console.log(item.Valute);
                this.valute = item.Valute
            })
            .catch(error => console.log(error));
    }
    
    constructor() {
        makeObservable(this,
            {
                value: observable,
                valute: observable,
                getValue: action.bound,
                fetchData: action.bound
            }
        )
    }
}