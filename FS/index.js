// fs=> fs module enables interacting with the file system.
// uses=> crete,read,update,delete

// -------------create----------
const fs=require('fs');
// fs.writeFileSync('index2.js',"this is first file of node js ")

// --------------read---------------
// const readfile=fs.readFileSync('file1.txt')
// const readfile1=readfile.toString();
// console.log(readfile1)
// buffer are the data which is inform of byte that human cann't read.

// -----------------update----------------
// fs.renameSync('index.html','index2.js')
// ----------------update data with the help of append---------------
// fs.appendFileSync('index2.html',"this is line updated.")

// ---------delete---------
// fs.unlinkSync('data.txt')
// fs.truncate('index2.html',0,function(){
//     console.log('content deleted!')
// })
fs.writeFile('index2.js','',function(){
    console.log('content deleted!')
})

