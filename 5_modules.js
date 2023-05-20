//Modules= encaapcapsulated code
//every file is module by default

const names=require('./2_name')
const say_hi=require('./3_utils')
console.log(names)
say_hi(names.name2)

require('./4_without_export')

