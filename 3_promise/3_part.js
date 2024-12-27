const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("async promisethree task is complete");
        resolve({
            username: "sumit",
            email: "sumit@gmail.com"
        });
    },5000);
});

promiseThree.then(function(user){
    console.log(user);
})