const{readFile,writeFile}=require('fs')

readFile('./content/first.txt','utf8',(err,result)=>{
    if(err){
        console.log(err)
        return null
    }
    const first=result;
    readFile('./content/second.txt','utf8',(err,result)=>{
        if(err){
            console.log("error is :",err)
            return
        }
        console.log(result)
        const second=result
        writeFile('./content/result_async.txt',`Combined file: ${first}, ${second}`,(err,result)=>{
            if(err){
                console.log("error is : ",err)
                return
            }
            console.log("final reult is ",result)

        })
    })

})