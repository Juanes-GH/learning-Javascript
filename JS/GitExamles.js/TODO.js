let baby = {
    name: 'Alex',
    secoundName: 'Hunter',
    age: 5,
    colorHair: 'brown',
    school: 'Carlos V',
    fullName: function(){
        console.log(this.name+ ' ' +this.secoundName);
    }
};
console.log(baby.fullName())