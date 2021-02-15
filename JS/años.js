const person = [
    {
        nombre: 'Juan',
        age: 25,
    },{
        nombre: 'Marta',
        age: 20,
    },{
        nombre: 'Nethan',
        age: 17,
    }
];
const res = person.some(isAdult);
function isAdult(person){
    return  person.age >= 18;
}
console.log(res);