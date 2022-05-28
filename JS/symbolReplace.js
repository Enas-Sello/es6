
var myStr="old string";
var replace="replace to my new string";

let obj={
    [Symbol.replace]:function(str){
        if(str.length>15){
            return `${str.substring(0,15)}......`;
                
            }
        }
    }

console.log(myStr);
console.log(replace.replace(obj));