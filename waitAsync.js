function getColdDrink(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            const coldDrink="Sprite";
            resolve(coldDrink);
        },2000)
    });
}
function getButter(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            const butter="Butter";
            resolve(butter);

        },1000)
        });
}
async function getUpdate(){
    try{
        const butter=await getButter();
        return butter;
        const drink=await getColdDrink();
        return drink;
    }
    catch(error){
        return error;
    }
}
getUpdate();