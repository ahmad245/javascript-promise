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

const  handelEvent = async() => {
   try {
       
       let result1=  await  getPosition();
       let result2=await setTimer(1000);
       console.log(result1);
       console.log(result2);
   } catch (error) {
       console.log(error);
       
   }

}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

btn.addEventListener('click', handelEvent)