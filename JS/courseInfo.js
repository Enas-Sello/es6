function courseInfo(options = {}) {
    let Info = {
      courseName: "MEARN",
      courseDuration: 600,
      engineer: "Eng/Mostafa",
  };
  console.log( `Your track is ${ Info.courseName } Duration ${ Info.courseDuration }h` );

     let result = Object.assign({}, Info, options);
     let op = Object.keys(options);
     let defaultOp=Object.keys(Info);
     let msg;

      for(let i = 0 ;i < op.length ; i++){
        if(op[i] === defaultOp[i]){
          msg =`You are now at ${result.courseName} Duration is ${result.courseDuration}h with  ${result.engineer}`;
     
        }
        else{
          throw `'${op[i]}' is not  sproperty  `;
        }
      }
      return msg;
      
  }
  
console.log( ` ${courseInfo({courseName:"ES6" , courseDuration: "9"})}`
);
  