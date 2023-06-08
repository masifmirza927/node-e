// const os = require("os");
const fs = require("fs");

// const {sum, multiply} = require("./functions");
// sum(3, 8);
// multiply(3, 4);

// os (operating system ) 
// console.log( os.platform() );
// console.log( os.cpus().length );
// console.log(os.uptime())




//  file system module fs
    // creating new file
    // fs.writeFile("sample.txt", "<h1>hello world</h1>", (error) => {
    //     if(error) {
    //         console.log(error)
    //     }else {
    //         console.log("successfully created");
    //     }
    // });

// reading files
    // const content =  fs.readFileSync("./sample.txt", "utf-8");
    // console.log(content)

// deleting file    
//    fs.unlink("./sample.txt", () => {
//     console.log("file deleted");
//    });

// creating directory/folder
// fs.mkdir("./files", () => {
//     console.log("folder created");
// });

const dir = fs.readdir("./", (res, files) => {
    console.log(files);
});

console.log(dir);