const getAccessToken = ()=> localStorage.getItem("token");

const setAccessToken = token => localStorage.setItem("token", token); 

const clear = (itemsToClear = []) => {
    itemsToClear.forEach( item => localStorage.removeItem(item) )
}

const setItems = itemsToSet => {
    itemsToSet && Object.entries( ([key,value]) => localStorage.setItem(key, value) ) 
}