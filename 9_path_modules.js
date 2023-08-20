const path=require('path')

console.log(path.sep )

const filePath=path.join('/content','ex.txt')
console.log(filePath)

const base=path.basename(filePath)
console.log(base)

const absolute=path.resolve(__dirname,'content','ex.txt')
console.log(absolute)
