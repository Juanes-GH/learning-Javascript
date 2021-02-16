/*FIZZ BUZZ GAME
- Given numbers from 0 to 100
- Every divisible by 3 number will print fizz
- Every divisible by 5 number will print buzz
- Every divisible by 3 and 5 will print fizzbuzz
- If the number is not divisible by any, will print the number itself
*/
for(let i = 0; i<= 100; i++){
    if(i % 3){
        console.log('FiZZ');
    }
    if(i % 5){
        console.log('BUZZ');
    }else if(i% 3,5){
        console.log('FizzBuzz');
    }
}