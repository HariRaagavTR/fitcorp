export function getFromStorage(key) {
    if(!key) {
        return null;
    }

    try {
        const valueStr = localStorage.getItem(key);
        
        if(valueStr) {
            return JSON.parse(valueStr);
        }
        else
            return null;
    }
    catch (err) {
        return null;
    }
}

export function setInStorage(key, object) {
    if(!key) {
        console.log('Error: Empty Key.');
    }
    else {
        try {
            localStorage.setItem(key, JSON.stringify(object));
        }
        catch (err) {
            console.log('Error: Set Item Unsuccessful.');
        }
    }
}