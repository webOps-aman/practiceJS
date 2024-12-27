new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("async task two is complete");
        resolve();
    },5000)
}).then(function(){
    console.log("promise two is consumed");
})