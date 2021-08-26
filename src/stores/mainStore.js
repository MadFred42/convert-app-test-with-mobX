import { action, makeObservable, observable, runInAction, toJS } from 'mobx';
import CurrencyService from '../serivce/convertCurrencyServ';

export default class Store {
    currencyService = new CurrencyService();
    value = '';
    valute = [
        {CharCode: "RUB", ID: "R01", Name: "Рубль", Nominal: 1, NumCode: "1", Value: 1}
    ];
    currency = '';

    getValue(e) {
        this.value = e.target.value;
        if (this.value.length === 0) {
            return
        }
        const numToConvert = this.value.match(/\d*/)[0];
        const convertibleValutesName = this.value.match(/\s+([^\s]*)/);
        const convertingValutesName = this.value.match(/\s+(\S+)$/);

        const valute = toJS(this.valute);

        const convertibleValutesValue = valute.find(item => {
            if (convertibleValutesName === null) {
                return null;
            }

            return item.CharCode === convertibleValutesName[1].toUpperCase();
        })

        const convertingValutesValue = valute.find(item => {
            if (convertingValutesName === null) {
                return null;
            }

            return item.CharCode === convertingValutesName[1].toUpperCase();
        })
        
        if (!convertibleValutesValue || !convertingValutesValue) {
            return
        }

        const currency = ((convertibleValutesValue.Value / convertingValutesValue.Value) * numToConvert).toFixed(2);

        this.currency = currency;
        if (this.value.length === 0) {
            this.currency = '';
        }
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