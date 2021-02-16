/* In this task I want to know the grade that  I have depending on the number*/
var notes= 5;
switch(notes){
    case 0:
    case 1:
    case 2:
    case 3:
        console.log( 0, 1, 2,'D-');
        break;
    case  4:
        console.log('D');
        break;
    case  5:
        console.log('C');
        break;
    case  6:
        console.log('C+');
        break;
    case  7 :
    case  8 :
        console.log('B+');
        break;
    case  9 :
    case  10 :
        console.log('A+');
        break;
    default:
        console.log('note not valid');
}