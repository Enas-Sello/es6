
function*fibonacci(b)
{

    let current = 0;
    let next = 1;
    let newNum =current+next;


    if(b === 1){
        yield current;
    }
    else if(b == 0){
        yield '';
    }
    else{
        yield current;
        yield next;
     
        for(let i = 1 ;i < b-1 ; i++){
            yield newNum = current + next;
            current = next;
            next = newNum;
        }
     

      
    }


}

let F =fibonacci(6); 
console.log("1=> "+ F.next().value);
console.log("2=> "+ F.next().value);
console.log("3=> "+ F.next().value);
console.log("4=> "+ F.next().value);
console.log("5=> "+ F.next().value);
console.log("6=> "+ F.next().value);
console.log("7=> "+ F.next().value);
