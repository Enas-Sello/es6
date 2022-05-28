// swap value 
let x = 5;
let y = 6;
console.log( `real value for =>X ${x} for Y => ${y}` );
[ x, y ] = [ y, x ];
console.log( `new value for =>X ${ x } for Y => ${ y }` );

// min max 
function minMax(...arr){
    let min = arr[0];
    let max =arr[0];
    for ( let i = 0; i < arr.length; i++ )
    {
        min = Math.min( min, arr[ i ] );
        max = Math.max( max, arr[ i ] );
    }
    return  `max value => ${max} , min value => ${min}`
};
console.log( minMax( ...[ 2, 5, 8, 9 ] ) );

// fruits

let fruits = [ "apple", "strawberry", "banana", "orange", "mango" ];
//1-
console.log( `is it string : ${ fruits.every( ( str ) => typeof str === 'string' ) }` );
//2-
console.log( `is it start with "a" :${ fruits.some( ( str ) => str.startsWith( 'a' ) ) }` );

//3-
let newArr = `only start with b => ${ fruits.filter( ( str ) => str.startsWith( 'b' ) ) }
only start with s => ${ fruits.filter( ( str ) => str.startsWith( 's' ) ) }` ;
console.log( newArr )

//4-
let newFruits = fruits.map( (str)=> 'fruit: ' + str)
console.log( newFruits )


//5-
console.log(newFruits.forEach( str => console.log( str ) ))


// var myArr = [1,20,3,20,40,55];

// console.log(
//     myArr.forEach(num => console.log(num))
// )
