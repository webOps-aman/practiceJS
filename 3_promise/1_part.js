const onePromise = new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("async task is complete");
        resolve();
    },5000);
});
onePromise.then(function(){
    console.log("promise consumed")
});