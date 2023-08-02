function generateRandomNumber(){
    const randNum = new Promise ((reslove, reject)=>{
        setTimeout(() => {
            reslove(Math.ceil(Math.random () % 2) *10 + 1)
        },1000)
    })
    randNum.then(Response =>{
        console.log(Response)
    }).catch(err => {
        console.log('err');
    })
}

let something = async () => {
    try {
        await generateRandomNumber()
    }catch(err){
        console.log('Error Occured');
    }
}
somethimg()