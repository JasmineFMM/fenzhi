self.addEventListener("message",(e)=>{
    // console.log(e.data);
    let result = e.data;
    let s = result.map (item =>{
        return item*item
    })
    postMessage(s)
    self.close()
})