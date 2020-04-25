let btn = document.getElementById('btn');

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const setTimer = (timeout) => {
    // when create promise constructor the promise will execute 
    // promise constructor  can take a function (resolver,reject)=>{} 
    // when create promise constructor the promise will execute the function 
    // resover and reject are function also  
    // resolver and reject passed by browser not by you 
    // resolver  and reject can take string , object ,array or any value 
    // the promise marke the result as success or error : success resolver ,error as reject 
    const promise = new Promise((resolver, reject) => {
        // here will write the code as you like 
        setTimeout(() => {
            resolver('ahmad'); // this resolver will not passe it but the browser will pass it 
        }, timeout);
    });
    return promise;
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// we must to create promise and inside the constructor we will write the code that will fetch data from
// geolocation and passed data success  inside resolve function 
// and when we call this function getPosition we will retive the data that passed inside the resolver function
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

const handelEvent = () => {
    let positionData;
    getPosition().
    then((posData) => {
        positionData = posData;
        return setTimer(1000)
    }).
    then((data) => {
        console.log(data, positionData);

    }).
    catch(error=>{
        console.log(error);
        
    })
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

btn.addEventListener('click', handelEvent)