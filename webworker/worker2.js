self.addEventListener("message",(e)=>{
    // console.log(e);
    let result = e.data
    result.age = 20
    postMessage(result)
})