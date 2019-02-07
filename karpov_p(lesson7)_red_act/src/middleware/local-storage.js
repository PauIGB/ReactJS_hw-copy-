export function loadState(key = 'state', param) {
    try{
        let json = localStorage.getItem(key);
        if(json === null) {
            return undefined;
        } else {     
            let data = JSON.parse(json);
            if(param) {
                let obj = Object.create({});
                obj[param] = data[param];
                data = obj;
            };
            return key !== 'state' ? { [key]: data } : data;
        }
    } catch(error) {
       return undefined;
    }
};

export default (key, param) => store => next => action => { 
    let result = next(action);   
    let data = key ? store.getState()[key] : store.getState();
    if(param) {
        let obj = Object.create({});
        obj[param] = data[param];
        data = obj;
    };
    try {
        let json = JSON.stringify(data);          
        localStorage.setItem(key || 'state', json);
    } catch(error) {
        console.error(error)
    }
    return result;
};