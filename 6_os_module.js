const os=require('os')

//info about user
const user =os.userInfo()
console.log(user)

//methos returns the system uptime in seconds
 console.log(`THe syste uptime is ${os.uptime()/60/60} hours`)

 const osInfo={
    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freeMem:os.freemem()
 }
 console.log(osInfo)