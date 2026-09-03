const cherry = () => {
    console.log("i aint waiting for you");
}
async function harry() {

    let delhiweather = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("27 degree celsius");
        }, 2000);
    });

    let lucinoweather = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("30 degree celsius");
        }, 5000);
    });

    console.log("welcome");
    let delhiw = await delhiweather;
    console.log("fethcing delhi wesather");
    
    console.log("delhi weather is " + delhiw);
    let lucinow = await lucinoweather;
    console.log("fetching lucinow weather");
    
    console.log("lucino weather is " + lucinow);
    

}

console.log("wolecome");
harry();
cherry();

