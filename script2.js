function cherry() {
    console.log("i aint waiting");
    
}
async function harry() {
    let delhiweather = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("22 degree")
        }, 2000);
    })
    let lkoweather = new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("couldn't get")
        }, 5000);
    })

    console.log("fetching delhi weather");
    let delhiw = await delhiweather
    console.log("fetched weateher is" + delhiw);
    console.log("fetching lko weather");
    try{
    let lkow = await lkoweather
    console.log("fteched watech is " + lkow);}
    catch(error){
        console.log("fuck " + error);
        
    }
    
    
    
    
    
}
console.log("welcome to weather control");

harry()

cherry();