let getstrawberries=()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve("red fucking strawberries")
        }, 2000);
    })
}

async function makesmoothie() {
    console.log("open blender");

    let strawberries = await getstrawberries();

    console.log(`here us your ${strawberries} mf`)
    
}
makesmoothie();
console.log("tv is playing")