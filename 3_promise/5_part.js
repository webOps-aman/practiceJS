const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("async task is complete");
        const error = true;
        // const error = false;
        if(!error){
            resolve({
                username:"deepu",
                email:"deepu@gmail.com"
            });
        }else{
            reject('Error Something went wrong');
        }
    },5000);
});
async function consumePromiseFive(){
    try {
        let response = await promiseFive;
        console.log(response);
    } catch (error) {
       console.log(error) ;
    }
}
consumePromiseFive()