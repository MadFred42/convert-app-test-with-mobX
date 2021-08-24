export default class CurrencyService {
    
    __url = 'https://www.cbr-xml-daily.ru/daily_json.js';

    getResourses = async () => {
        const res = await fetch(this.__url);
        
        if (!res.ok) {
            throw new Error(`Could not fetch ${this.__url}`);
        }
        
        return res.json();
    }
}