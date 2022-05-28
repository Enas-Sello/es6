
var myObj={
    uname:"enas",
    age:27,
    address:"mansoura",
    [Symbol.iterator]:function(){
        let objKey=Object.keys(this);
        let count=-1;
        return{
            next:function(){
                if(count < objKey.length-1){
                    count++;
                    return {value:myObj[objKey[count]] , done:false};
                }
                else{
                    return {value:undefined , done:true};
                }
            }
        }
    }
}

for( let [e , n] of Object.entries(myObj) ){
    console.log(e +" : "+ n);
}

