import { action, makeObservable, observable, runInAction, toJS } from 'mobx';
import CurrencyService from '../serivce/convertCurrencyServ';

export default class Store {
    currencyService = new CurrencyService();
    value = '';
    valute = [];
    currency = '';

    getValue(e) {
        this.value = e.target.value;
        if (this.value.length === 0) {
            return
        }
        const num = this.value.match(/\d*/)[0];
        const convertibleValutes = this.value.match(/\s+([^\s]*)/);
        const convertingValutes = this.value.match(/\s+(\S+)$/)

        if (convertibleValutes === null || convertingValutes === null) {
            return
        }
        const valute = toJS(this.valute);
        const convrtblValute = valute[convertibleValutes[1].toUpperCase()];
        const convrtngValute = convertibleValutes.length !== 0 ? valute[convertingValutes[1].toUpperCase()] : null;
        const currency = `${((convrtblValute / convrtngValute) * num).toFixed(2)} ${convertibleValutes.length !== 0 ? convertingValutes[1] : null}`;

        

        this.currency = currency;
    }

    fetchData() {
        this.currencyService.getResourses()
            .then(item => {
                runInAction(() => {
                    this.valute.push(...Object.values(item.Valute));
                })               
            })
            .catch(error => console.log(error));
    }
    
    constructor() {
        makeObservable(this,
            {
                value: observable,
                valute: observable,
                currency: observable,
                getValue: action.bound,
                fetchData: action.bound
            }
        )
    }
}