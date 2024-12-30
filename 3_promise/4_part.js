const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("async four task is complete");
        let error = false;
        if(!error){
            resolve({
                username: "Surinder Kumar",
                email: "surinder@gmail.com"
            });
        }else{
            reject('Error Something went wrong');
        }
    },5000)
});
promiseFour
.then(function(user){
    console.log(user);
    return user.username
})
.then(function(username){
    console.log(username)
})
.catch(function(error){
    console.log(error)
})
.finally(function(){
    console.log("the promise is either solve or rejected")
});