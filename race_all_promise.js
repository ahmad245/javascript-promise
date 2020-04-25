let btn = document.getElementById('btn');

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const setTimer = (timeout) => {
   
    const promise = new Promise((resolver, reject) => {
        
        setTimeout(() => {
            resolver('ahmad'); 
        }, timeout);
    });
    return promise;
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const getPosition = (opt = {}) => {
    const promise = new Promise((resolver, reject) => {
        navigator.geolocation.getCurrentPosition(
            success => {
                resolver(success);
            },
            error => {
                reject(error);
            }, opt);
    });
    return promise;
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// race return just the faster promise was resolve or reject 
Promise.race([setTimer(100),getPosition()]).then(data=>console.log(data)) 

// all return array of data combine the result from all promises
// if one of promise is reject the another promise will not executed
Promise.all([setTimer(100),getPosition()]).then(data=>console.log(data));

// all return array of data combine the result from all promises
// if one of promise is reject the another promise will  executed
Promise.allSettled([setTimer(100),getPosition()]).then(data=>console.log(data));

