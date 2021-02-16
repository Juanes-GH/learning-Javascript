let a = [2,4,8,6]
let b = [5,5,3,7]
let c = a.concat(b);
console.log('C',c);
const x =c.reduce((acc,item)=> acc+item, 0);
console.log(x);