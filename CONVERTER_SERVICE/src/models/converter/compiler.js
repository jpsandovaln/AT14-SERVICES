//const { exec } = require('child_process')
const util = require('util');
const exec = util.promisify(require('child_process').exec);
//const { stdout, stderr } = require('process')

class Compiler{
    constructor() {}

    async execute(command) {
        //return new Promise(function(resolve, reject) {
            try{
                const {stdout, stderr}=await exec(command);
                return {stdout, stderr};
            }catch(err){
                return {err};
            }
            
            //exec(command, (err, stdout, stderr) => {

               // resolve({ stdout, success:true });
               
           // });
     //   })    
    }

    
    
    
}


module.exports = Compiler;